const express = require("express");
const next = require("next");
const cors = require("cors");
const { createProxyMiddleware } = require("http-proxy-middleware");

const port = parseInt(process.env.PORT, 10) || 3001;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev, dir: "." });
const handle = app.getRequestHandler();

const devProxy = {
  "/api": {
    target: "http://site.mvad.com",
    changeOrigin: true,
    pathRewrite: { "^/api": "/api" },
    logLevel: "debug",
    onProxyReq: function (req) {
      console.log("req");
    },
    // 修改响应头信息，实现跨域并允许带 cookie
    onProxyRes: function (proxyRes, req, res) {
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Credentials", "true");
    },
  },
};

app
  .prepare()
  .then(() => {
    const server = express();
    server.use(cors());
    Object.keys(devProxy).forEach(function (context) {
      server.use(createProxyMiddleware(context, devProxy[context]));
    });
    server.all("*", (req, res) => {
      return handle(req, res);
    });

    server.listen(port, (err) => {
      if (err) throw err;
      console.log(`> Ready on http://localhost:${port}`);
    });
  })
  .catch((e) => {
    console.log("Error::::", e);
  });
