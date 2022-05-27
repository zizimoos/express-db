const output = {
  hello: (req, res) => {
    res.render("home/index");
  },
  login: (req, res) => {
    res.render(`home/login`);
  },
};

const users = {
  id: ["aaa", "bbb", "ccc"],
  psword: ["111", "222", "333"],
};

const process = {
  login: (req, res) => {
    const id = req.body.id;
    const psword = req.body.psword;
    const index = users.id.indexOf(id);
    if (users.id[index] === id && users.psword[index] === psword) {
      return res.json({
        status: "success",
        message: "login success",
      });
    }
    return res.json({
      status: "false",
      message: "login failed",
    });
  },
};

module.exports = {
  output,
  process,
};
