const express = require("express");
const next = require("next");

const app = next({ dev: true });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();

    server.get("/posts/:id", (req, res) => {
      const actualPage = "/posts";
      const queryParams = { title: req.params.id };
      console.log(queryParams);

      app.render(req, res, actualPage, queryParams);
    });

    server.get("*", (req, res) => {
      return handle(req, res);
    });

    server.listen(3000, (err) => {
      if (err) throw err;
    });
    console.log("ready");
  })
  .catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
  });
