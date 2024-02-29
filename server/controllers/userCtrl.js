const Users = require("../models/userModel");

const userCtrl = {
  getAll: async (req, res) => {
    try {
      let users;
      users = await Users.find();
      
      res.status(200).json({ users });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  getById: async (req, res) => {
    try {
      let user;

      user = await Users.find({id: req.params.id});
      res.status(200).json({ user });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
};

module.exports = userCtrl;
