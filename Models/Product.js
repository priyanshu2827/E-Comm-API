import mongoose from "mongoose";
// This is called as dynamic schema
const productSchema = new mongoose.Schema({

}, 
{ strict: false });

export const Product = mongoose.model("Product", productSchema);