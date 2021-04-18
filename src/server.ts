import express from "express";

const server = express();

server.use(express.static(__dirname + "/public"));

server.listen(8080, () => {
  console.log("<== Server listening on PORT 8080 ==>");
});
