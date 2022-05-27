class UserStorage {
  static #users = {
    id: ["aaa", "bbb", "ccc"],
    psword: ["111", "222", "333"],
    name: ["김덕수", "김성우", "김성환"],
    email: ["aaa@aamail.com", "bbb@bbmail.com", "ccc@ccmail.com"],
  };

  static getUsers(...args) {
    const users = this.#users;
    const newUsers = args.reduce((newUsers, cur) => {
      if (users.hasOwnProperty(cur)) {
        newUsers[cur] = users[cur];
      }
      return newUsers;
    }, {});
    return newUsers;
  }

  static getUserInfo(id) {
    const users = this.#users;
    const idx = users.id.indexOf(id);
    const usersKeys = Object.keys(users);
    const userInfo = usersKeys.reduce((newUser, cur) => {
      newUser[cur] = users[cur][idx];
      return newUser;
    }, {});
    return userInfo;
  }
  static addUser(user) {
    const users = this.#users;
    users.id.push(user.id);
    users.psword.push(user.psword);
    users.name.push(user.name);
    users.email.push(user.email);
    console.log("usersStorage", users);
  }
}

module.exports = UserStorage;
