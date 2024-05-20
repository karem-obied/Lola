const express = require("express");
const router = express.Router();
const {
  createBlog,
  deleteBlog,
  getDraftedBlogs,
  getPostedBlogs,
} = require("../controlers/blogControlers");
const protect = require("../middlewares/auth");

router.route("/create").post(createBlog, protect);
router.route("/getPostedBlogs").get(getPostedBlogs);
router.route("/getDraftedBlogs").get(getDraftedBlogs, protect);
router.route("/delete/:id").delete(deleteBlog, protect);

module.exports = router;
