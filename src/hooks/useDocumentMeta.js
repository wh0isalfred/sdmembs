import { useEffect } from "react";
import { COMPANY } from "../data/company";

/**
 * Sets document.title and per-route <meta>/<link> tags (description,
 * robots, canonical, Open Graph, Twitter), and restores the previous values
 * on unmount. This is a deliberately small stand-in for a library like
 * react-helmet-async — this project has six routes total, so a full
 * metadata-management dependency isn't justified. If the route count grows
 * significantly, revisit this.
 *
 * On its own, this only fixes metadata for JS-executing clients (real
 * browsers, and crawlers that render JS). It does NOT make the metadata
 * present in the raw HTML Vercel serves for a fresh request — plain HTTP
 * clients and crawlers that don't execute JS would still see index.html's
 * homepage tags. That gap is closed by scripts/prerender.mjs, which visits
 * each route with a real browser (after this hook has run), captures the
 * fully-updated HTML, and writes it as that route's static output — see the
 * README's SEO/prerender section for the full explanation.
 */
export default function useDocumentMeta({
  title,
  description,
  path = "/",
  robots = "index, follow",
  ogImage = `${COMPANY.canonicalOrigin}/og-image.png`,
}) {
  useEffect(() => {
    const url = `${COMPANY.canonicalOrigin}${path}`;
    const prev = {};

    function setMeta(selector, attr, value, createTag) {
      let tag = document.querySelector(selector);
      if (!tag && createTag) {
        tag = document.createElement(createTag.tagName);
        Object.entries(createTag.attrs).forEach(([k, v]) => tag.setAttribute(k, v));
        document.head.appendChild(tag);
      }
      if (!tag) return null;
      prev[selector] = tag.getAttribute(attr);
      tag.setAttribute(attr, value);
      return tag;
    }

    const prevTitle = document.title;
    if (title) document.title = title;

    if (description) {
      setMeta('meta[name="description"]', "content", description);
      setMeta('meta[property="og:description"]', "content", description);
      setMeta('meta[name="twitter:description"]', "content", description);
    }
    setMeta('meta[name="robots"]', "content", robots, { tagName: "meta", attrs: { name: "robots" } });
    setMeta('link[rel="canonical"]', "href", url);
    setMeta('meta[property="og:url"]', "content", url);
    if (title) {
      setMeta('meta[property="og:title"]', "content", title);
      setMeta('meta[name="twitter:title"]', "content", title);
    }
    if (ogImage) {
      setMeta('meta[property="og:image"]', "content", ogImage);
      setMeta('meta[name="twitter:image"]', "content", ogImage);
    }

    return () => {
      document.title = prevTitle;
      Object.entries(prev).forEach(([selector, value]) => {
        const tag = document.querySelector(selector);
        if (tag && value != null) {
          const attr = selector.includes("canonical") ? "href" : "content";
          tag.setAttribute(attr, value);
        }
      });
    };
  }, [title, description, path, robots, ogImage]);
}
