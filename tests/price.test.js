import { expect, it, vi } from "vitest";
import { priceWithTax } from "@/price.js";

vi.mock("@/rate.js", () => ({
  getTaxRate: vi.fn(),
}));

import { getTaxRate } from "@/rate.js";

it("adds tax to the amount", async () => {
  // Arrange
  getTaxRate.mockResolvedValue(0.1);
  const amount = 100;

  // Act
  const result = await priceWithTax(amount);

  // Assert
  expect(result).toBe(110);
});

it("handles a 500", async () => {
  // Arrange
  getTaxRate.mockRejectedValue(new Error("500"));
  const amount = 100;

  // Act
  const result = await priceWithTax(amount);

  // Assert
  expect(result).toBe("Error 500");
});