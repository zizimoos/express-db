const UserStorage = require("./UserStorage");

class User {
  constructor(body) {
    this.body = body;
  }
  async login() {
    try {
      const user = await UserStorage.getUserInfo(this.body.id);

      if (user) {
        if (user.id === this.body.id && user.psword === this.body.psword) {
          return {
            success: true,
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
        err,
      };
    }
  }
  async register() {
    try {
      const response = await UserStorage.addUser(this.body);
      return response;
    } catch (err) {
      return { success: false, err };
    }
  }
}

module.exports = User;
