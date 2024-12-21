const sum = (a, b) => {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error("Please provide a valid number");
  }

  return a + b;
};
const multiply = (a, b) => a * b;

export { sum, multiply };
