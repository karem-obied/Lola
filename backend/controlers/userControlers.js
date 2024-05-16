const jwt = require("jsonwebtoken");
const User = require("../models/user");
const asyncHandler = require("express-async-handler");
const bcrypt = require("bcryptjs");

const register = asyncHandler(async (req, res) => {
  const [userName, email, password, job = "", skills = []] = req.body;
  if (!userName || !email || !password) {
    res.status(400);
    throw new Error("Please Enter All Your Informations");
  }
  const salt = await bcrypt.genSalt(10);
  const hashed = await bcrypt.hash(password, salt);
  const user = User.create({
    userName,
    password: hashed,
    email,
    job,
    skills,
    blogs: [],
    answers: [],
    accounts: [],
    generatedIdeas: [],
    generatedPosts: [],
  });
  if (!user) {
    res.status(400);
    throw new Error("Something went wrong, please try again later");
  }
  res.status(200).json({
    _id: user._id,
    userName: user.userName,
    email: user.email,
    job: user.job,
    skills: user.skills,
    blogs: user.blogs,
    answers: user.answers,
    accounts: user.accounts,
    generatedIdeas: user.generatedIdeas,
    generatedPosts: user.generatedPosts,
    token: generate(user._id),
  });
});

const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400);
    throw new Error("Please Provide All The Information Needed");
  }
  const user = await User.find({ email });
  if (!user) {
    res.status(400);
    throw new Error("User Doesn't Exist, Pleast Check Again");
  }
  if (!(await bcrypt.compare(password, user.password))) {
    res.status(400);
    throw new Error("Password Isn't Correct");
  }
  if (user && (await bcrypt.compare(password, user.password))) {
    res.status(200).json({
      _id: user._id,
      userName: user.userName,
      email: user.email,
      job: user.job,
      skills: user.skills,
      blogs: user.blogs,
      answers: user.answers,
      accounts: user.accounts,
      generatedIdeas: user.generatedIdeas,
      generatedPosts: user.generatedPosts,
      token: generate(user._id),
    });
  }
  res.status(400);
  throw new Error("Something Went Wrong, Please Try Again Later");
});

const update = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);
});

const generate = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET);
};

module.exports = {
  register,
  login,
};
