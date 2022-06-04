const UserStorage = require("./UserStorage");

class User {
  constructor(body) {
    this.body = body;
  }
  async login() {
    try {
      const { id, psword } = await UserStorage.getUserInfo(this.body.id);
      console.log(id, psword);
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
    } catch (err) {
      return {
        success: false,
        message: err.message,
      };
    }
  }
  async register() {
    try {
      const response = await UserStorage.addUser(this.body);
      return response;
    } catch (err) {
      return {
        success: false,
        message: err.message,
      };
    }
  }
}

module.exports = User;
