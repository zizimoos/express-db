const id = document.getElementById("id");
const psword = document.getElementById("psword");
const loginBtn = document.querySelector("button");

function login() {
  const idValue = id.value;
  const pswordValue = psword.value;
  const req = {
    id: idValue,
    psword: pswordValue,
  };

  fetch("/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
  });
}
loginBtn.addEventListener("click", login);
