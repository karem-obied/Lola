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

    twitter: {
      type: Object,
    },

    createdAt: { type: Date, default: Date.now },

    updatedAt: { type: Date, default: Date.now },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", UserSchema);
