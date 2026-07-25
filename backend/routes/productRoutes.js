const express = require("express");
const Product = require("../models/Product");

const router = express.Router();

/*
=====================================
GET Semua Produk
GET /api/products
=====================================
*/

router.get("/", async (req, res) => {
  try {
    const products = await Product.find();

    res.json(products);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
});

/*
=====================================
POST Tambah Produk
POST /api/products
=====================================
*/

router.post("/", async (req, res) => {

  try {

    const product = new Product({

      name: req.body.name,
      price: req.body.price,
      description: req.body.description,
      image: req.body.image

    });

    const newProduct = await product.save();

    res.status(201).json(newProduct);

  } catch (error) {

    res.status(400).json({
      message: error.message
    });

  }

});

/*
=====================================
GET Product by ID
GET /api/products/:id
=====================================
*/

router.get("/:id", async (req, res) => {

    try {

        const product = await Product.findById(req.params.id);

        if (!product) {

            return res.status(404).json({
                message: "Produk tidak ditemukan"
            });

        }

        res.json(product);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

});

/*
=====================================
UPDATE Product
PUT /api/products/:id
=====================================
*/

router.put("/:id", async (req, res) => {

    try {

        const updatedProduct = await Product.findByIdAndUpdate(

            req.params.id,

            req.body,

            { new: true }

        );

        if (!updatedProduct) {

            return res.status(404).json({
                message: "Produk tidak ditemukan"
            });

        }

        res.json(updatedProduct);

    } catch (error) {

        res.status(400).json({
            message: error.message
        });

    }

});

/*
=====================================
DELETE Product
DELETE /api/products/:id
=====================================
*/

router.delete("/:id", async (req, res) => {

    try {

        const deletedProduct = await Product.findByIdAndDelete(req.params.id);

        if (!deletedProduct) {

            return res.status(404).json({
                message: "Produk tidak ditemukan"
            });

        }

        res.json({

            message: "Produk berhasil dihapus"

        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

});


module.exports = router;