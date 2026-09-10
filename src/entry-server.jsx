import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { AppLayout } from "./App.jsx";

export function render(url) {
  return renderToString(
    <StaticRouter location={url}>
      <AppLayout />
    </StaticRouter>,
  );
}
