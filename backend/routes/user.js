const express = require("express");
const router = express.Router();
const protect = require("../middlewares/auth");

const { register, login } = require("../controlers/userControlers");

router.route("/").post(register);
router.route("/login").post(login);

module.exports = router;
