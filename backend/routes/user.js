const express = require("express");
const router = express.Router();
const protect = require("../middlewares/auth");

const {
  register,
  login,
  deleteUser,
  getUser,
  updateUser,
} = require("../controlers/userControlers");

router.route("/").post(register);
router.route("/login").post(login);
router.route("/get").get(getUser, protect);
router.route("/delete").delete(deleteUser, protect);
router.route("/update").put(updateUser, protect);

module.exports = router;
