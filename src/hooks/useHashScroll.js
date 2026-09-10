import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Scrolls to the element matching the current URL hash, on every route
 * change (including the initial load). Works whether the target element
 * already exists (same-page hash change) or doesn't exist yet because the
 * new route hasn't rendered it (cross-page navigation, e.g. clicking
 * /services#k9-security from the homepage) — in the second case it waits
 * for the element to actually appear in the DOM via MutationObserver,
 * rather than guessing how long rendering will take with a fixed timer.
 *
 * Elements being scrolled to should have `scroll-mt-*` set in their
 * className so the fixed navbar doesn't cover them once scrolled into view
 * — this hook only handles *when* to scroll, not the offset.
 */
export default function useHashScroll() {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash?.replace("#", "");
    if (!hash) return;

    const existing = document.getElementById(hash);
    if (existing) {
      existing.scrollIntoView({ behavior: "smooth" });
      return;
    }

    // Target isn't in the DOM yet (route just changed) — watch for it.
    const observer = new MutationObserver(() => {
      const el = document.getElementById(hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        observer.disconnect();
      }
    });
    observer.observe(document.body, { childList: true, subtree: true });

    // Safety net: stop watching after 3s so a permanently-missing target
    // (typo'd hash, removed section) doesn't leave an observer running forever.
    const stop = setTimeout(() => observer.disconnect(), 3000);

    return () => {
      observer.disconnect();
      clearTimeout(stop);
    };
  }, [location.pathname, location.hash]);
}
