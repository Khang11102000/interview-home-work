const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema(
  {
    _id: { type: mongoose.Schema.ObjectId, required: true },
    id: { type: Number, required: true },
    owner: { type: Number, required: true },
    post: { type: Number, required: true },
    content: { type: String, required: true },
    createAt: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("comments", CommentSchema);
