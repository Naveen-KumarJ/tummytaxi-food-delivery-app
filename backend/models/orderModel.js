const mongoose = require("mongoose");

const orderSchema = mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
    required: true,
  },
  items: { type: Array, required: true },
  amount: { type: Number, required: true },
  address: { type: Object, required: true },
  status: { type: String, default: "Food Processing" },
  date: { type: Date, default: Date.now() },
  payment: { type: Boolean, default: false },
});
const orderModel = mongoose.model("orders", orderSchema);

module.exports = orderModel;
