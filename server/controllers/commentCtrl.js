const Comments = require("../models/commentModel");

const commentCtrl = {
  getAll: async (req, res) => {
    try {
      let comments;
      comments = await Comments.find();

      res.status(200).json({ comments });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  getByPost: async (req, res) => {
    try {
      let comments;

      comments = await Comments.find({post: req.params.id});
      comments.filter((c, i) => i >= comments.length - 2);
      res.status(200).json({ comments });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  getAllByPost: async (req, res) => {
    try {
      let comments;

      comments = await Comments.find({post: req.params.id});
      res.status(200).json({ comments });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
};

module.exports = commentCtrl;
