import { expect, it, vi } from "vitest";
import { greet } from "@/greeting.js";


it("greets the user by name", async () => {
  // Arrange

  // Act
  const result = await greet();

  // Assert
  expect(result).toBe("Hello, User!");
});
