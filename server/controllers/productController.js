const { ProductModel } = require("../models/productModels.js");

const ProductCtrl = {
  get: (req, res) => {
    let query = {};
    query.name = req.params.name;
    ProductModel.get(query, (err, data) => {
      (err) && res.send(err).status(400);
      res.send(data).status(200);
    })
  },
  post: (req, res) => {
    let name = req.params.name;
    ProductModel.post(name, (err, data) => {
      (err) && res.send(err).status(400);
      res.send(data).status(201);
    })
  }
};

module.exports = {
  ProductCtrl : ProductCtrl
};

