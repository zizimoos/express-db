const express = require("express");
const router = express.Router();
const { hello, login } = require("./home.ctrl");

router.get("/", hello);
router.get("/login", login);

module.exports = router;
