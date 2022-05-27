const hello = (req, res) => {
  res.render("home/index");
};

const login = (req, res) => {
  console.log(req.body);
  res.render(`home/login`);
};

module.exports = {
  hello,
  login,
};
