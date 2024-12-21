import { sum, multiply } from "../src/utils.mjs";

describe("Utils Test Suite: sum", () => {
  it("Should sum two numbers", () => {
    expect(sum(1, 2)).toBe(3);
  });
  it("Should throw an error if we don't provide a valid number", () => {
    expect(() => sum("1", 2)).toThrow("Please provide a valid number");
  });
});

describe("Perkalian", () => {
  test("add 2x3=6", () => {
    expect(multiply(2, 3)).toBe(6);
  });
});
