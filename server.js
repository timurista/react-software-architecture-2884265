import React from "react";
// import epxress
import express from "express";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import Home from "./src/pages/Home";
import App from "./src/App";
import path from "path";
import fs from "fs";
import { ServerStyleSheet } from "styled-components";

const app = express();

app.use(express.static("./build", { index: false }));

app.get("/*", (req, res) => {
  const sheet = new ServerStyleSheet();
  const reactApp = renderToString(
    sheet.collectStyles(
      <StaticRouter location={req.url}>
        <App />
      </StaticRouter>
    )
  );
  console.log("reactApp", reactApp);
  const templateFile = path.resolve("./build/index.html");
  fs.readFile(templateFile, "utf8", (err, data) => {
    if (err) {
      console.error("Something went wrong:", err);
      return res.status(500).send("Oops, better luck next time!");
    }
    return res.send(
      data
        .replace('<div id="root"></div>', `<div id="root">${reactApp}</div>`)
        .replace("{{ styles }}", sheet.getStyleTags())
    );
  });
});

app.listen(3000, () => {
  console.log("server is running on port 3000");
});
