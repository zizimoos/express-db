const db = require("../config/db");

class UserStorage {
  // static #getUserInfo(data, id) {
  //   const users = JSON.parse(data);
  //   const idx = users.id.indexOf(id);
  //   const usersKeys = Object.keys(users);
  //   const userInfo = usersKeys.reduce((newUser, cur) => {
  //     newUser[cur] = users[cur][idx];
  //     return newUser;
  //   }, {});
  //   return userInfo;
  // }
  // static #getUsers(data, args) {
  //   const users = JSON.parse(data);
  //   const newUsers = args.reduce((newUsers, cur) => {
  //     if (users.hasOwnProperty(cur)) {
  //       newUsers[cur] = users[cur];
  //     }
  //     return newUsers;
  //   }, {});
  //   return newUsers;
  // }

  // static getUsers(...args) {}

  static getUserInfo(id) {
    return new Promise((resolve, reject) => {
      const query = "SELECT * FROM users WHERE id = ?;";
      db.query(query, [id], (err, data) => {
        if (err) {
          reject(err);
        } else {
          resolve(data[0]);
        }
      });
    });
  }

  static async addUser(user) {
    return new Promise((resolve, reject) => {
      const query = "INSERT INTO users(id,name,psword) VALUES(?,?,?);";
      console.log(user.id, user.name, user.psword);
      db.query(query, [user.id, user.name, user.psword], (err) => {
        if (err) {
          reject(`${err}`);
        } else {
          resolve({
            success: true,
          });
        }
      });
    });
  }
}

module.exports = UserStorage;
