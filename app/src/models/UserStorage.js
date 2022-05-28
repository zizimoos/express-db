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
  static getUsers(...args) {
    // const users = this.#users;
    const newUsers = args.reduce((newUsers, cur) => {
      if (users.hasOwnProperty(cur)) {
        newUsers[cur] = users[cur];
      }
      return newUsers;
    }, {});
    return newUsers;
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

  static addUser(user) {
    // const users = this.#users;
    users.id.push(user.id);
    users.psword.push(user.psword);
    users.name.push(user.name);
    users.email.push(user.email);
    console.log("usersStorage", users);
  }
}

module.exports = UserStorage;
