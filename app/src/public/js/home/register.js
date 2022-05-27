const id = document.getElementById("id");
const name = document.getElementById("name");
const psword = document.getElementById("psword");
const confirmPsword = document.getElementById("confirm-psword");
const email = document.getElementById("email");
const registerBtn = document.querySelector("button");

registerBtn.addEventListener("click", register);

function register() {
  const data = {
    id: id.value,
    name: name.value,
    psword: psword.value,
    confirmPsword: confirmPsword.value,
    email: email.value,
  };
  console.log(data);
  fetch("/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.success) {
        console.log(res);
        location.href = "/login";
      } else {
        console.log(res);
      }
    })
    .catch((err) => {
      console.log(`회원 가입 에러 발생: ${err}`);
    });
}
