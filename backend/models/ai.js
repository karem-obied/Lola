// models/AI.js
const mongoose = require("mongoose");

const AISchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  prompt: {
    type: String,
    required: true,
  },
  generatedContent: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  usedFor: { type: String },
});

module.exports = mongoose.model("AI", AISchema);
