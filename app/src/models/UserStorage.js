const colors = require("colors");
const fs = require("fs").promises;

class UserStorage {
  static #getUserInfo(data, id) {
    const users = JSON.parse(data);
    const idx = users.id.indexOf(id);
    const usersKeys = Object.keys(users);
    const userInfo = usersKeys.reduce((newUser, cur) => {
      newUser[cur] = users[cur][idx];
      return newUser;
    }, {});
    return userInfo;
  }
  static #getUsers(data, args) {
    const users = JSON.parse(data);
    const newUsers = args.reduce((newUsers, cur) => {
      if (users.hasOwnProperty(cur)) {
        newUsers[cur] = users[cur];
      }
      return newUsers;
    }, {});
    return newUsers;
  }

  static getUsers(...args) {
    return fs
      .readFile("./src/databases/users.json", "utf8")
      .then((data) => {
        return this.#getUsers(data, args);
      })
      .catch(console.error);
  }

  static getUserInfo(id) {
    return fs
      .readFile("./src/databases/users.json", "utf8")
      .then((data) => {
        return this.#getUserInfo(data, id);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  static async addUser(user) {
    const users = await this.getUsers("id", "psword", "name", "email");

    if (users.id.includes(user.id)) {
      throw "이미 존재하는 아이디입니다.";
    }
    users.id.push(user.id);
    users.psword.push(user.psword);
    users.name.push(user.name);
    users.email.push(user.email);
    fs.writeFile("./src/databases/users.json", JSON.stringify(users));
    return { succss: true, message: "회원가입 성공" };
  }
}

module.exports = UserStorage;
