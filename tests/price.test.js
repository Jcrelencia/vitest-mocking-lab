import { expect, it, vi } from "vitest";
import { priceWithTax } from "@/price.js";

vi.mock("@/rate.js", () => ({
  getTaxRate: vi.fn().mockResolvedValue(0.1),
}));

it("adds tax to the amount", async () => {
  // Arrange
  const amount = 100;

  // Act
  const result = await priceWithTax(amount);

  // Assert
  expect(result).toBe(110);
});
