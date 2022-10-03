const express = require("express");
const app = express();

app.get("/", (request, response) => {
  response.send("Hello Jovi!");
});

app.listen(3000);
