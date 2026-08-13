import { expect, it, vi } from "vitest";
import { getUser } from "@/api.js";


it("formats the user it gets back", async () => {
  // Arrange
  global.fetch = vi.fn().mockResolvedValue({
    json: async () => ({ name: "User", email: "user@example.com" }),
  });

  // Act
  const result = await getUser(1);

  // Assert
  expect(result).toBe("User (user@example.com)");
});
