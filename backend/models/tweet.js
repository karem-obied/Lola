// models/Tweet.js
const mongoose = require("mongoose");

const TweetSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
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
  scheduledFor: {
    type: Date,
  },
  status: {
    type: String,
    default: "draft",
  },
  analytics: { type: mongoose.Schema.Types.Mixed },
});

module.exports = mongoose.model("Tweet", TweetSchema);
