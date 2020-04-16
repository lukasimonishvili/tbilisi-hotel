const express = require("express");
const path = require("path");
const http = require("http");
const app = express();

app.use(express.static(path.join(__dirname, "build")));

app.all("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist/airLink/index.html"));
});

const port = process.env.PORT || "3000";
app.set("port", port);
const server = http.createServer(app);

server.listen(port, () => {
  console.log(`Running on localhost:${port}`);
});
