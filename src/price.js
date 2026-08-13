import { getTaxRate } from "./rate.js";

export async function priceWithTax(amount) {
  const rate = await getTaxRate();
  return amount + amount * rate;
}
