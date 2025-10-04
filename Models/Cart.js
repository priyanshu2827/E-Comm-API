import mongoose from "mongoose";

const cartItemSchema = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product", // must match model name
    required: true,
  },
  title: { type: String, required: true },
  price: { type: Number, required: true },
  qty: { type: Number, required: true },
});

const cartSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  //  Humne array of object banaya jisme cartItemSchema ka use kiya jisme productId,title,price,qty hoga
  items: [cartItemSchema],
});

export const Cart = mongoose.model("Cart", cartSchema);


