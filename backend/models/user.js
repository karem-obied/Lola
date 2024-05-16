const mongoose = require("mongoose");

const UserSchema = mongoose.Schema(
  {
    userName: {
      type: String,
      required: [true, "Please Provide Your UserName"],
    },

    password: {
      type: String,
      required: [true, "Please Provide Your Password"],
    },

    email: {
      type: String,
      required: [true, "Please Provide Your Email"],
    },

    accounts: {
      type: Array,
    },

    blogs: {
      type: Array,
    },

    answers: {
      type: Array,
    },

    job: {
      type: String,
    },

    skills: {
      type: Array,
    },

    generatedIdeas: {
      type: Array,
    },

    generatedPosts: {
      type: Array,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", UserSchema);
