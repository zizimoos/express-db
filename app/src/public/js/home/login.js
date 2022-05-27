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
  console.log(req);
}
loginBtn.addEventListener("click", login);
