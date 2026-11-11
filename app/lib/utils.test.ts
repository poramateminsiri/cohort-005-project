import { describe, it, expect } from "vitest";
import { formatMoney } from "./utils";

describe("formatMoney", () => {
  it("always shows cents, and zero is a price rather than 'Free'", () => {
    expect(formatMoney(0)).toBe("$0.00");
    expect(formatMoney(4999)).toBe("$49.99");
  });

  it("groups thousands", () => {
    expect(formatMoney(123_456_789)).toBe("$1,234,567.89");
  });
});
