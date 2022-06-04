const User = require("../../models/User");
const logger = require("../../config/logger");

const output = {
  hello: (req, res) => {
    logger.info(` GET / 200 "HOME 화면으로 이동"`.yellow);
    res.render("home/index");
  },
  login: (req, res) => {
    logger.info(` GET /login 200 "login 화면으로 이동"`.yellow);
    res.render(`home/login`);
  },
  register: (req, res) => {
    logger.info(` GET /register 200 "register 화면으로 이동"`.yellow);
    res.render(`home/register`);
  },
};

const process = {
  login: async (req, res) => {
    const user = new User(req.body);
    const response = await user.login();
    logger.info(
      ` POST /login 200 Response:"success:${response.success}, message:${response.message}" "로그인 성공"`
        .yellow
    );
    return res.json(response);
  },
  register: async (req, res) => {
    const user = new User(req.body);
    const response = await user.register();
    logger.info(
      ` POST /register 200 Response:"success:${response.success}, message:${response.message}" "회원가입 성공"`
        .yellow
    );
    return res.json(response);
  },
};

module.exports = {
  output,
  process,
};
