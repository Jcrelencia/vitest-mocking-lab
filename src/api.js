export async function getUser(id) {
  const res = await fetch(`https://api.example.com/users/${id}`);
  const data = await res.json();
  return `${data.name} (${data.email})`;
}
