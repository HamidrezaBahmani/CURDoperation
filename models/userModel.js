const moongoose = require("mongoose");

const userSchema = moongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Please add the user name"],
    },
    email: {
      type: String,
      required: [true, "Please add the user email addresss"],
      unique: [true, "email address already taken"],
    },
    password: {
      type: String,
      required: [true, "Please add the user password"],
    },
  },
  { timestamps: true }
);
module.exports = moongoose.model("User", userSchema);
