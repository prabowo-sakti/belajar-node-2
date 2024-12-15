import { save, on } from "./utils.mjs";

on("file:saved", ({ location, data }) => {
  console.log(`File saved at ${location}`);
});

console.log("Saving file...");

save(
  "test.txt",
  "Halo namaku prabowo sakti, umur 22 tahun yang ketertinggalan dalam beberapa hal"
).catch("Error saving file");

console.log("The file is being saved but is not blocking the execution");
