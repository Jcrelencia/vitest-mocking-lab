import { getTaxRate } from "./rate.js";

export async function priceWithTax(amount) {
  try {
    const rate = await getTaxRate();
    return amount + amount * rate;
  } catch (err) {
    return "Error 500";
  }
}
