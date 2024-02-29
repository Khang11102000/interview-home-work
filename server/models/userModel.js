const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    _id: { type: mongoose.Schema.ObjectId, required: true },
    id: { type: Number, required: true },
    username: { type: String, required: true },
    password: { type: String, required: true },
    name: { type: String, required: true },
    dob: { type: String, required: true },
    createAt: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("users", UserSchema);
