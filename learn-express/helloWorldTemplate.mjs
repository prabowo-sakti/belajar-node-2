import express from "express";

// Deklarasikan app terlebih dahulu
const app = express();
const port = 3000;

// Tentukan path untuk views setelah app dideklarasikan

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index", {
    title: "Ini sebuah aplikasi express",
    subtitle: "Menggunakan ejs template engine",
  });
});

app.listen(port, () => {
  console.log(`Aplikasi berjalan pada http://localhost:${port}`);
});
