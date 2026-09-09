import { useEffect } from "react";

/**
 * Sets document.title and the meta-description/robots tags for the current
 * route, and restores sensible defaults on unmount. This is a deliberately
 * small stand-in for a library like react-helmet-async — this project has a
 * total of six routes, so a full metadata-management dependency isn't
 * justified. If the route count grows significantly, revisit this.
 *
 * Note: this only covers <title>, <meta name="description">, and
 * <meta name="robots">. It does NOT update canonical/OG/Twitter tags per
 * route — those still come from the shared tags in index.html and currently
 * describe the homepage. Search engines and link-preview crawlers reading
 * canonical/OG tags for /aboutus, /services, etc. will see homepage values.
 * True per-route canonical/OG requires either a static prerender step or a
 * small SSR/edge function — flagged in the README as follow-up work.
 */
export default function useDocumentMeta({ title, description, robots = "index, follow" }) {
  useEffect(() => {
    const prevTitle = document.title;
    if (title) document.title = title;

    const descTag = document.querySelector('meta[name="description"]');
    const prevDescription = descTag?.getAttribute("content");
    if (description && descTag) descTag.setAttribute("content", description);

    let robotsTag = document.querySelector('meta[name="robots"]');
    const prevRobots = robotsTag?.getAttribute("content");
    if (!robotsTag) {
      robotsTag = document.createElement("meta");
      robotsTag.setAttribute("name", "robots");
      document.head.appendChild(robotsTag);
    }
    robotsTag.setAttribute("content", robots);

    return () => {
      document.title = prevTitle;
      if (descTag && prevDescription != null) descTag.setAttribute("content", prevDescription);
      if (robotsTag && prevRobots != null) robotsTag.setAttribute("content", prevRobots);
    };
  }, [title, description, robots]);
}
