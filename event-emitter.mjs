// import { EventEmitter } from "node:events";

// const emitter = new EventEmitter();

// setInterval(() => {
//   emitter.emit("message", `Interval (${Date.now()})`);
// }, 1000);

// emitter.on("message", (message) => {
//   console.log(`Litener tambahan menerima: ${message}`);
// });

// emitter.once("message", (message) => {
//   console.log(`Listener "once" menerima: ${message}`);
// });

// setTimeout(() => {
//   emitter.emit("message", "Timeout mengirim pesan");
// }, 2500);
// import { EventEmitter } from "node:events";

// class MyEmitter extends EventEmitter {}

// const myEmitter = new MyEmitter();

// myEmitter.on("event", () => {
//   console.log("Halo dunia");
// });

// myEmitter.emit("event");
