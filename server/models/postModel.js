const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
    _id: { type: mongoose.Schema.ObjectId, required: true },
    id: { type: Number, required: true },
    owner: { type: Number, required: true },
    title: { type: String, required: true },
    content: { type: String, required: true },
    createAt: { type: Number, required: true },
    tags: { type: Array },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("posts", PostSchema);
