const asyncHandler = require("express-async-handler");
const User = require("../models/user");
const Blog = require("../models/blog");

const createBlog = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);
  if (!user) {
    res.status(404);
    throw new Error("User Not Found");
  }
  const { title, content, status } = req.body;
  if (!title || !content) {
    res.status(400);
    throw new Error("Please Fill All The Feilds");
  }
  const blog = await Blog.create({
    userId: req.user._id,
    title,
    content,
    status: status != "" ? status : "draft",
  });
  if (!blog) {
    res.status(500);
    throw new Error("Something went wrong, Please Try Again Later");
  }
  res.status(200).json(blog);
});
const getPostedBlogs = asyncHandler(async (req, res) => {
  const id = req.params.id;
  if (!id) {
    res.status(400);
    throw new Error("Please Provide The ID of the User");
  }
  const postedBlogs = await Blog.findAll({ userId: id });
  const result =
    postedBlogs.length > 0
      ? postedBlogs.filter((blog) => blog.status == "posted")
      : [];
  res.status(200).json(result);
});

const getDraftedBlogs = asyncHandler(async (req, res) => {
  const draftedBlogs = await Blog.findAll({ userId: req.user._id });
  const result =
    draftedBlogs.length > 0
      ? draftedBlogs.filter((blog) => blog.status == "draft")
      : [];
  res.status(200).json(result);
});
const deleteBlog = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);
  if (!user) {
    res.status(404);
    throw new Error("User Not Found");
  }
  const blog = await Blog.findById(req.params.id);
  if (!blog) {
    res.status(404);
    throw new Error("Blog Not Found");
  }
  if (blog.userId.toString() != user._id) {
    res.status(401);
    throw new Error("User not Authed");
  }
  await Blog.findByIdAndDelete(req.params.id);
  res.status(200).json(req.params.id);
});
const updateBlog = asyncHandler(async (req, res) => {});
module.exports = {
  createBlog,
  deleteBlog,
  getDraftedBlogs,
  getPostedBlogs,
  updateBlog,
};
