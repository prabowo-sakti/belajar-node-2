import { describe, it } from "node:test";
import assert from "node:assert";

const sum = (a, b) => a + b;
describe("Penggunaan matematika", () => {
  it("Menjumlahkan 2 angka", () => {
    assert.strictEqual(sum(1, 2), 4);
  });
});
