export async function getName() {
  const res = await fetch("https://api.example.com/me");
  const data = await res.json();
  return data.name;
}
