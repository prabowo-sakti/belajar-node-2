import { sum, multiply } from "./src/utils.mjs";

describe("sum.js", () => {
  test("Add 1+2 to equal 3", () => {
    expect(sum(1, 2)).toBe(3);
  });
});

describe("Perkalian", () => {
  test("add 2x3=6", () => {
    expect(multiply(2, 3)).toBe(6);
  });
});
