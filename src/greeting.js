import { getName } from "./user.js";

export async function greet() {
  const name = await getName();
  return `Hello, ${name}!`;
}
