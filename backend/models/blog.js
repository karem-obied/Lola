// models/BlogPost.js
const mongoose = require("mongoose");

const BlogPostSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  updatedAt: {
    type: Date,
    default: Date.now(),
  },
  status: {
    type: String,
    default: "draft",
  },
});

module.exports = mongoose.model("BlogPost", BlogPostSchema);
