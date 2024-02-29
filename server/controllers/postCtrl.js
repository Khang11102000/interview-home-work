const Posts = require("../models/postModel");

const postCtrl = {
  //   createProduct: async (req, res) => {
  //     const newProduct = new Products(req.body);

  //     try {
  //       await newProduct.save();

  //       res.status(200).json({ msg: "Product has been created" });
  //     } catch (err) {
  //       return res.status(500).json({ msg: err.message });
  //     }
  //   },
  //   updateProduct: async (req, res) => {
  //     try {
  //       await Products.findByIdAndUpdate(
  //         req.params.id,
  //         {
  //           $set: req.body,
  //         },
  //         { new: true }
  //       );

  //       res.status(200).json({ msg: "Updated product success" });
  //     } catch (err) {
  //       return res.status(500).json({ msg: err.message });
  //     }
  //   },
  //   getProduct: async (req, res) => {
  //     try {
  //       const product = await Products.findById(req.params.id);
  //       res.status(200).json({ product });
  //     } catch (err) {
  //       return res.status(500).json({ msg: err.message });
  //     }
  //   },
  getAll: async (req, res) => {
    try {
      let posts;
      posts = await Posts.find();
      
      res.status(200).json({ posts });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  getById: async (req, res) => {
    try {
      let post;
      post = await Posts.find({id: req.params.id});
      res.status(200).json({ post });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  getByTitle: async (req, res) => {
    try {
      var regex = new RegExp(req.params.title, "i");
      Posts.find({
        title: regex,
      }).then((posts) => {
        res.status(200).json({ posts });
      });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
};

module.exports = postCtrl;
