// import { readFile } from "node:fs";

// readFile("hello.txt", (err, content) => {
//   if (err) {
//     console.error("Omg, ada error:", err);
//     return;
//   }

//   console.log(`Konten berkas: ${content}`);
// });

// const fs = require("fs/promises");

// async function bacaFile() {
//   try {
//     const content = await fs.readFile("hello.txt", "utf-8");
//     console.log(content);
//   } catch (error) {}
// }

// bacaFile();

// import { readFileSync } from "node:fs";

// try {
//   const content = readFileSync("hello.txt");
//   console.log(`Konten berkas: ${content}`);
// } catch (error) {
//   console.error("File tidak ditemukan,", error);
// }

import { readFileSync } from "node:fs";

readFile("hello.txt")
  .then((content) => console.log(`Konten berisi: ${content}`))
  .catch((err) => console.error(err));
