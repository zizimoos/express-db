const id = document.getElementById("id");
const userName = document.getElementById("name");
const psword = document.getElementById("psword");
const confirmPsword = document.getElementById("confirm-psword");
const email = document.getElementById("email");
const registerBtn = document.querySelector("button");

registerBtn.addEventListener("click", register);

function register(e) {
  e.preventDefault();
  if (
    !id.value ||
    !userName.value ||
    !psword.value ||
    !confirmPsword.value ||
    !email.value
  ) {
    alert("모든 항목을 입력해주세요.");
    return;
  }
  if (psword.value !== confirmPsword.value) {
    alert("비밀번호가 일치하지 않습니다.");
    return;
  }
  const data = {
    id: id.value,
    name: userName.value,
    psword: psword.value,
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
      console.log("회원가입 실패");
    });
}
