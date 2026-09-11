import { fileURLToPath, pathToFileURL } from "url";
import path from "path";
import fs from "fs/promises";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectDir = path.join(__dirname, "..");
const distDir = path.join(projectDir, "dist");
const ssrDir = path.join(projectDir, "dist-ssr");
const origin = "https://www.sanddmembs.org";

const ROUTES = {
  "/": {
    title: "S & D Membs Security Services | Professional Security Across Nigeria",
    description: "Licensed private security company delivering trained guards, corporate and industrial protection, security dogs, mobile patrol, CCTV monitoring and security consultancy across Nigeria.",
  },
  "/aboutus": {
    title: "About Us | S & D Membs Security Services",
    description: "Licensed private security company protecting businesses, institutions and industrial operations across Nigeria since 2009.",
  },
  "/services": {
    title: "Our Services | S & D Membs Security Services",
    description: "Corporate and industrial security, trained guards, authorized armed support, security dogs, mobile patrol, CCTV monitoring and security consultancy across Nigeria.",
  },
  "/offices": {
    title: "Our Offices | S & D Membs Security Services",
    description: "Contact S & D Membs offices and operations teams in Port Harcourt, Abuja, Lagos and Bayelsa for professional security services across Nigeria.",
  },
  "/privacy-policy": {
    title: "Privacy Policy | S & D Membs Security Services",
    description: "How S & D Membs Security Services collects, uses and protects information from visitors to this website.",
  },
  "/terms-of-use": {
    title: "Terms of Use | S & D Membs Security Services",
    description: "The terms that govern your use of the S & D Membs Security Services website.",
  },
};

const NOT_FOUND = {
  title: "Page Not Found | S & D Membs Security Services",
  description: "The page you're looking for doesn't exist.",
  robots: "noindex, follow",
};

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

const META_PATTERNS = {
  description: /(<meta name="description" content=")[^"]*(" \/>)/,
  robots: /(<meta name="robots" content=")[^"]*(" \/>)/,
  canonical: /(<link rel="canonical" href=")[^"]*(" \/>)/,
  ogTitle: /(<meta property="og:title" content=")[^"]*(" \/>)/,
  ogDescription: /(<meta property="og:description" content=")[^"]*(" \/>)/,
  ogUrl: /(<meta property="og:url" content=")[^"]*(" \/>)/,
  twitterTitle: /(<meta name="twitter:title" content=")[^"]*(" \/>)/,
  twitterDescription: /(<meta name="twitter:description" content=")[^"]*(" \/>)/,
};

function replaceMeta(html, key, value) {
  return html.replace(META_PATTERNS[key], `$1${escapeHtml(value)}$2`);
}

function buildHtml(template, body, route, meta) {
  const url = `${origin}${route === "/" ? "/" : route}`;
  let html = template.replace('<div id="root"></div>', `<div id="root">${body}</div>`);
  html = html.replace(/<title>[^<]*<\/title>/, `<title>${escapeHtml(meta.title)}</title>`);
  html = replaceMeta(html, "description", meta.description);
  html = replaceMeta(html, "robots", meta.robots || "index, follow");
  html = replaceMeta(html, "canonical", url);
  html = replaceMeta(html, "ogTitle", meta.title);
  html = replaceMeta(html, "ogDescription", meta.description);
  html = replaceMeta(html, "ogUrl", url);
  html = replaceMeta(html, "twitterTitle", meta.title);
  html = replaceMeta(html, "twitterDescription", meta.description);
  return html;
}

async function main() {
  const template = await fs.readFile(path.join(distDir, "index.html"), "utf8");
  const entryUrl = pathToFileURL(path.join(ssrDir, "entry-server.js")).href;
  const { render } = await import(entryUrl);

  for (const [route, meta] of Object.entries(ROUTES)) {
    const html = buildHtml(template, render(route), route, meta);
    const outDir = route === "/" ? distDir : path.join(distDir, route.slice(1));
    await fs.mkdir(outDir, { recursive: true });
    await fs.writeFile(path.join(outDir, "index.html"), html, "utf8");
    console.log(`prerendered ${route.padEnd(16)} -> ${path.relative(distDir, outDir) || "."}/index.html   <title>${meta.title}</title>`);
  }

  const missingRoute = "/this-path-does-not-exist-and-never-will";
  const notFoundHtml = buildHtml(template, render(missingRoute), "/404", NOT_FOUND);
  await fs.writeFile(path.join(distDir, "404.html"), notFoundHtml, "utf8");
  await fs.rm(ssrDir, { recursive: true, force: true });
  console.log(`prerendered 404              -> 404.html   <title>${NOT_FOUND.title}</title>`);
}

main().catch((error) => {
  console.error("Prerender failed:", error);
  process.exit(1);
});
