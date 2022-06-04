const id = document.getElementById("id");
const psword = document.getElementById("psword");
const loginBtn = document.querySelector("button");

loginBtn.addEventListener("click", login);

function login() {
  if (!id.value || !psword.value) {
    alert("모든 항목을 입력해주세요.");
  }
  if (!psword.value) {
    alert("비밀번호를 입력해주세요.");
    return;
  }
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
      if (res.success) {
        console.log(res);
        location.href = "/";
      } else {
        console.log(res);
      }
    })
    .catch((err) => {
      console.log("로그인 실패");
    });
}
