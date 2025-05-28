async function sendFlirt() {
  const name = document.getElementById("name").value;
  const interest = document.getElementById("interest").value;

  const res = await fetch('/flirt-bot', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, interest })
  });

  const data = await res.json();
  document.getElementById("response").innerText = data.reply;
}
