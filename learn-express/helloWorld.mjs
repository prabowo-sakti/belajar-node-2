import express from "express";

const app = express();

const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello world from express!");
});

app.listen(port, () => {
  console.log(`Hello world app listening on http://localhost:${port} `);
});
