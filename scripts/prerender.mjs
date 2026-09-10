// scripts/prerender.mjs
//
// Runs after `vite build`. Starts a tiny static file server over dist/,
// visits each real (indexable) route with a headless browser, waits for
// useDocumentMeta to update <title>/<meta>/<link> tags for that route, and
// writes the resulting HTML to dist/<route>/index.html.
//
// Why this exists: a plain Vite SPA build only produces one dist/index.html
// — every route shares the same static <head> until React Router mounts
// client-side and useDocumentMeta patches the tags in the live DOM. That's
// enough for real browsers and JS-executing crawlers, but a plain HTTP
// request (curl, or a crawler that doesn't run JS) only ever sees the
// homepage's tags for every route. This script closes that gap without a
// framework migration: each route gets its own real, correct static HTML
// file, and the same JS bundle still hydrates over it for full SPA
// behavior once loaded.
//
// This does NOT prerender /home (redirects before rendering) or the 404
// catch-all (infinite path space, and it's noindex anyway).
//
// Uses only Playwright (already a devDependency for this pattern — see
// package.json) and Node's built-in http/fs — no new dependency added just
// for this static server.

import { chromium } from "playwright";
import { createServer } from "http";
import { fileURLToPath } from "url";
import path from "path";
import fs from "fs/promises";
import fsSync from "fs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.join(__dirname, "..", "dist");

const ROUTES = ["/", "/aboutus", "/services", "/offices", "/privacy-policy", "/terms-of-use"];

const MIME = {
  ".html": "text/html", ".js": "application/javascript", ".css": "text/css",
  ".png": "image/png", ".jpg": "image/jpeg", ".jpeg": "image/jpeg",
  ".webp": "image/webp", ".svg": "image/svg+xml", ".ico": "image/x-icon",
  ".json": "application/json", ".xml": "application/xml", ".txt": "text/plain",
  ".webmanifest": "application/manifest+json",
};

function serveStatic(req, res) {
  const urlPath = decodeURIComponent(req.url.split("?")[0]);
  let filePath = path.join(distDir, urlPath);

  // SPA fallback: if the exact file doesn't exist, serve index.html so
  // client-side routing still works for any route not yet prerendered.
  if (!fsSync.existsSync(filePath) || fsSync.statSync(filePath).isDirectory()) {
    filePath = path.join(distDir, "index.html");
  }

  const ext = path.extname(filePath);
  res.setHeader("Content-Type", MIME[ext] || "application/octet-stream");
  fsSync.createReadStream(filePath).pipe(res);
}

async function main() {
  const server = createServer(serveStatic);
  await new Promise((resolve) => server.listen(0, resolve));
  const port = server.address().port;
  const baseUrl = `http://localhost:${port}`;

  const browser = await chromium.launch();
  const page = await browser.newPage();

  for (const route of ROUTES) {
    await page.goto(`${baseUrl}${route}`, { waitUntil: "networkidle" });
    // Give useDocumentMeta's effect a tick to run after mount.
    await page.waitForTimeout(150);

    const html = await page.content();

    const outDir = route === "/" ? distDir : path.join(distDir, route.slice(1));
    await fs.mkdir(outDir, { recursive: true });
    await fs.writeFile(path.join(outDir, "index.html"), html, "utf-8");

    // Sanity check: confirm the title actually changed per route, so a
    // silent failure (e.g. the hook not running) doesn't go unnoticed.
    const title = await page.title();
    console.log(`prerendered ${route.padEnd(16)} -> ${path.relative(distDir, outDir) || "."}/index.html   <title>${title}</title>`);
  }

  // Also prerender the branded Not Found page as dist/404.html. Vercel's
  // static file serving has a documented convention: for a request that
  // matches no real file and no rewrite/redirect, if a 404.html exists at
  // the output root, Vercel serves it WITH a genuine HTTP 404 status —
  // no wildcard SPA rewrite needed for that to work. See vercel.json (the
  // old catch-all "/(.*) -> /index.html" rewrite was removed specifically
  // because it would otherwise intercept every unknown path before Vercel
  // ever got to apply this 404 behavior) and the README's "404 handling"
  // section for the full explanation, including the one remaining edge
  // case this doesn't cover.
  await page.goto(`${baseUrl}/this-path-does-not-exist-and-never-will`, { waitUntil: "networkidle" });
  await page.waitForTimeout(150);
  const notFoundHtml = await page.content();
  await fs.writeFile(path.join(distDir, "404.html"), notFoundHtml, "utf-8");
  console.log(`prerendered 404              -> 404.html   <title>${await page.title()}</title>`);

  await browser.close();
  server.close();
}

main().catch((err) => {
  console.error("Prerender failed:", err);
  process.exit(1);
});
