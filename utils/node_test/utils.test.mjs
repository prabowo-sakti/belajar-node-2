import { describe, it } from "node:test";
import assert from "node:assert";
import { sum, multiply } from "../src/utils.mjs";

describe("Serangkain test untuk: Sum", () => {
  it("Penjumlahan modul sum", () => {
    assert.strictEqual(sum(1, 2), 3);
  });
});

describe("Serangkaian test untuk: multiply", () => {
  it("Perkalian modul multiply", () => {
    assert.strictEqual(multiply(2, 3), 6);
  });
});
