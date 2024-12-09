// fetch("https://api.demo.foo/v1/todo")
//   .then((res) => res.json())
//   .then((json) => console.log(json))
//   .catch((err) => console.log(err));

// const generatePromise = (shouldFail) => {
//   return new Promise((resolve, reject) => {
//     if (shouldFail) {
//       return reject(new Error("Ditolak!"));
//     }
//     resolve("Berhasil");
//   });
// };

// generatePromise(false)
//   .then((res) => console.log("Pesan Berhasil:", res))
//   .catch((err) => console.log("Pesan Error:", err));

// generatePromise()
//   .then(generatePromise)
//   .then((res) => {
//     return generatePromise(false);
//   })
//   .then(() => console.log("Bagian ini tidak akan dipanggil"))
//   .catch((err) => console.log("Pesan error:", err));

// async function exampleAsyncFunction() {
//   try {
//     const result1 = await generatePromise();
//     const result2 = await generatePromise();

//     console.log("Hasil1:", result1);

//     console.log("Hasil2:", result2);
//   } catch (error) {
//     console.log(error);
//   }
// }
// exampleAsyncFunction();

// (async () => {
//   const res = await fetch("https://api.demo.foo/v1/todo");
//   const json = await res.json();
//   console.log(json);
// })();

const randomTimeOutPromise = () => {
  const time = Math.floor(Math.random() * 100);

  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Promise resolved after ${time}ms`);
      resolve(time);
    }, time);
  });
};

Promise.all([
  randomTimeOutPromise(),
  randomTimeOutPromise(),
  randomTimeOutPromise(),
  randomTimeOutPromise(),
]).then((res) => {
  console.log("result", res);
});
