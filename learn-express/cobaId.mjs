// import express from "express";

// const app = express();
// const invoices = [
//   { id: 1, customer: "Alice", total: 500 },
//   { id: 2, customer: "Bob", total: 300 },
//   { id: 3, customer: "Charlie", total: 700 },
// ];

// // Endpoint untuk mengakses invoice
// app.get("/invoice/:id?", (req, res) => {
//   const id = parseInt(req.params.id);

//   if (id) {
//     const invoice = invoices.find((inv) => inv.id === id);

//     if (invoice) {
//       return res.send(
//         `Invoice found: Customer: ${invoice.customer}, Total: $${invoice.total}`
//       );
//     } else {
//       return res.status(404).send("Invoice not found");
//     }
//   }

//   // Jika ID tidak valid atau tidak ada, tampilkan semua invoice
//   res.send(
//     `All invoices: ${invoices
//       .map(
//         (inv) =>
//           `ID: ${inv.id}, Customer: ${inv.customer}, Total: $${inv.total}`
//       )
//       .join("; ")}`
//   );
// });

// // Server listening
// app.listen(3000, () => {
//   console.log("Server is running on http://localhost:3000");
// });

// app.get("/msg/:id/:action(edit|delete)", (req, res) => {
//   res.send(
//     `Permintaan kamu untuk ${req.params.action} dengan id pesan ${req.params.id}`
//   );
// });

// app.get("/films", (req, res) => {
//     const { category, director } = req.query;

//     res.send(
//       `Kamu mengunjungi film dengan kategori ${category} dan direktornya adalah ${director}`
//     );
//   });

// app.get("/", (req, res, nest) => {
//   res.set({
//     "Content-Type": "text/html",
//     "x-powered-by": "Prabowo Sakti",
//     Connection: "keep-alive",
//     "Keep-Alive": "timeout=1200 max=1000",
//   });
//   res.send("<h1> Hello World</h1>");
// });

// app.get("/", (req, res) => {
//   res.status(200).set("Content-Type", "text/html").send("<h1>Hello World</h1>");
// });

import express from "express";

const app = express();
const port = 3000;

app.get("/about/me/challange", (req, res) => {
  res.redirect("..");
});

app.listen(port, () => {
  console.log(`Aplikasi kamu jalan di port http://localhost:${port}`);
});
