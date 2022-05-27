const UserStorage = require("../../models/UserStorage");

const output = {
  hello: (req, res) => {
    res.render("home/index");
  },
  login: (req, res) => {
    res.render(`home/login`);
  },
};

const process = {
  login: (req, res) => {
    const id = req.body.id;
    const psword = req.body.psword;
    const users = UserStorage.getUsers("id", "psword", "name");

    const response = {};
    const index = users.id.indexOf(id);
    if (users.psword[index] === psword) {
      response.status = "success";
      return res.json(response);
    }
    response.status = "fail";
    return res.json(response);
  },
};

module.exports = {
  output,
  process,
};
