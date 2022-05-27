const UserStorage = require("./UserStorage");

class User {
  constructor(body) {
    this.body = body;
  }
  login() {
    const { id, psword } = UserStorage.getUserInfo(this.body.id);
    if (id) {
      if (id === this.body.id && psword === this.body.psword) {
        return {
          success: true,
          message: "로그인 성공",
        };
      }
      return {
        success: false,
        message: "비밀번호가 잘못되었습니다.",
      };
    }
    return {
      success: false,
      message: "아이디가 존재하지 않습니다.",
    };
  }
  register() {
    const { id, email } = UserStorage.getUserInfo(this.body.id);
    if (id) {
      return {
        success: false,
        message: "이미 존재하는 아이디입니다.",
      };
    }
    if (email) {
      return {
        success: false,
        message: "이미 존재하는 이메일입니다.",
      };
    }

    UserStorage.addUser(this.body);
    return {
      success: true,
      message: "회원가입 성공",
    };
  }
}

module.exports = User;
