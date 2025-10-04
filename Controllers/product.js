import { Product } from "../Models/product.js";

// add product
export const addProduct = async (req, res) => { // this is try and catch method
  try {
    let product = await Product.create(req.body); // everything will come in req.body
    res.json({ message: "Product added successfully", product, success: true });
  } catch (error) {
    res.json(error.message);
  }
};

// get all product
export const getAllProducts = async (req, res) => {
  try {
    let products = await Product.find();
    if (!products)
      return res.json({ message: "No Product find", success: false });

    res.json({ message: "Fetched all products", products, success: true });
  } catch (error) {
    res.json(error.message);
  }
};

// get product by id 
// it is similar to get all product instead kya hoga humhe id ke basis pe product milega toh humne parms use kiya aur id mei dala aur usko product.findById mei use kiya
export const getProductById = async (req, res) => {
  const id = req.params.id;
  try {
    let product = await Product.findById(id);
    if (!product) return res.json({ message: "Invalid Id", success: false });

    res.json({ message: "Fetched Specific Product", product, success: true });
  } catch (error) {
    res.json(error.message);
  }
};

// update product by id
export const updateProductById = async (req, res) => {
  const id = req.params.id;
  try {  // issme humne findByIdAndUpdate use kiya aur doh parameter pass kiya id and req.body jisme sara data hoga jisko update karna hei aur teesra parameter new:true use kiya taki updated data mile
    let product = await Product.findByIdAndUpdate(id, req.body, { new: true });
    if (!product) return res.json({ message: "Invalid Id", success: false });

    res.json({
      message: "Product updated Successfully",
      product,
      success: true,
    });
  } catch (error) {
    res.json(error.message);
  }
};

// delete product by id
export const deleteProductById = async (req, res) => {
  const id = req.params.id;
  try {
    let product = await Product.findByIdAndDelete(id);
    if (!product) return res.json({ message: "Invalid Id", success: false });

    res.json({
      message: "Product has been Deleted Successfully",
      success: true,
    });
  } catch (error) {
    res.json(error.message);
  }
};