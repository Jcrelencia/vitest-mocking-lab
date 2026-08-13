import { expect, it, vi } from "vitest";
import { greet } from "@/greeting.js";
import { getName } from "@/user.js";

vi.mock("@/user.js", () => ({
  getName: vi.fn(),
}));

it("greets the user by name", async () => {
  // Arrange
  getName.mockResolvedValue("User");

  // Act
  const result = await greet();

  // Assert
  expect(result).toBe("Hello, User!");
});