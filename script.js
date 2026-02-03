const form = document.getElementById("recycleForm");
const statusMessage = document.getElementById("statusMessage");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const flat = document.getElementById("flat").value.trim();

  if (!name || !email || !flat) {
    statusMessage.textContent = "Please fill in all fields.";
    statusMessage.style.color = "red";
    return;
  }

  statusMessage.textContent = `Thanks, ${name}! Your signup has been received. We'll contact you at ${email}.`;
  statusMessage.style.color = "#2a9d8f";

  form.reset();
});
