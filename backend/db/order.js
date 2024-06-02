const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  products: Array,
  stripeId: String,
  status: String,
  date: {
    type: Date,
    default: Date.now,
  },
});

const Order = mongoose.model("Order", orderSchema);
