const id = document.getElementById("id");
const psword = document.getElementById("psword");
const loginBtn = document.querySelector("button");

loginBtn.addEventListener("click", login);

function login() {
  const data = {
    id: id.value,
    psword: psword.value,
  };
  fetch("/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.status === "success") {
        location.href = "/";
      } else {
        alert(`아이디 혹은 비밀번호가 잘못되었습니다.`);
      }
    })
    .catch((err) => {
      console.error(new Error("login failed"));
    });
}
