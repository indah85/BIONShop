const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const productRoutes = require("./routes/productRoutes");
const authRoutes = require("./routes/authRoutes");

const app = express();

/*
=====================================
Middleware
=====================================
*/

app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads"));

/*
=====================================
MongoDB Connection
=====================================
*/

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("✅ MongoDB Atlas Connected");
  })
  .catch((err) => {
    console.error("❌ Gagal terhubung ke MongoDB");
    console.error(err);
  });

/*
=====================================
Routes
=====================================
*/

app.get("/", (req, res) => {
  res.send("Backend BIONShop Berjalan 🚀");
});

app.use("/api/products", productRoutes);
app.use("/api/auth", authRoutes);

/*
=====================================
Run Server
=====================================
*/

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server berjalan di http://localhost:${PORT}`);
});