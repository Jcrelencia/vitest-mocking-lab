export async function getTaxRate() {
  const res = await fetch("https://api.example.com/tax");
  const data = await res.json();
  return data.rate;
}
