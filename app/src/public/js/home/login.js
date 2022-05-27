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
      console.log(res);
      if (res.success) {
        console.log(res);
        location.href = "/";
      } else {
        console.log(res);
      }
    })
    .catch((err) => {
      console.log(err);
    });
}
