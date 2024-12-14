// import { watch } from "node:fs";

// console.log("Watching for file changes...");

// watch("./watch.txt", (eventType, filename) => {
//   console.log("----------------------------------------------");
//   console.log(`Event type is: ${eventType}`);

//   if (filename) {
//     console.log(`Filename provided: ${filename}`);
//   }
// });

import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const file = path.join(__dirname, "watch.mjs");

console.log(file);
