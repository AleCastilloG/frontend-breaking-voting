const path = require("path");

const express = require("express");

const app = express();

app.use(express.static(__dirname + "/breaking-bad"));

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "breaking-bad", "index.html"));
});

app.listen(
  {
    port: process.env.PORT || 8080,
  },
  () => {
    console.log("Servidor iniciado http://localhost:8080");
  }
);
