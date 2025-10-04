import { Cart } from "../Models/Cart.js";
import { isAuthenticated } from "../Middlewares/Auth.js";


// add to cart
export const addToCart = async (req, res) => {
  const { productId, title, price, qty } = req.body;
  const userId = req.user; // userId hume middleware se milega (req.user)

  let cart = await Cart.findOne({ userId }); // check karo ki user ka cart hai ya nahi

  if (!cart) {
    // agar cart nahi hai toh naya create karo
    cart = new Cart({ userId, items: [] });
  }

  // check karo ki product already cart mei hai ya nahi
  const itemIndex = cart.items.findIndex(
    (item) => item.productId.toString() === productId
  );

  if (itemIndex > -1) {
    // ✅ agar product already cart mei hai
    // pehle per-unit price calculate karo
    const unitPrice = cart.items[itemIndex].price / cart.items[itemIndex].qty;

    // fir qty badhao
    cart.items[itemIndex].qty += qty;

    // aur price ko update karo according to new qty * unitPrice
    cart.items[itemIndex].price = cart.items[itemIndex].qty * unitPrice;
  } else {
    // ✅ agar product cart mei nahi hai toh naya push karo
    // yaha price ka matlab per-unit price hai jo req.body se aaya hai
    cart.items.push({ productId, title, price: price * qty, qty });
  }

  await cart.save();
  res.json({ message: "Items added to cart", cart, success: true });
};


// get user cart
export const userCart = async (req, res) => {
  const userId = req.user;

  let cart = await Cart.findOne({ userId });
  if (!cart) return res.json({ message: "Cart not found" });

  res.json({ message: "User Cart ", cart });
};

// remove product from cart
export const removeProductFromCart = async (req, res) => {
  const productId = req.params.productId;
  const userId = req.user;

  let cart = await Cart.findOne({userId});
  if (!cart) return res.json({ message: "Cart not found" });

  cart.items = cart.items.filter((item)=>item.productId.toString() !== productId)

  await cart.save();

  res.json({message:'product has been remvoe from cart'})


};

// clear cart
export const clearCart = async (req,res) =>{
    const userId = req.user;

    let cart = await Cart.findOne({userId});
    
    if(!cart) {
        cart = new Cart({items:[]});
    }else{
        cart.items = []
    }

    await cart.save();

    res.json({message:"User Cart Cleard"})
}

// decrease qty from cart
export const decreaseProductQty = async (req,res) =>{
    const { productId, qty } = req.body;

    const userId = req.user;

    let cart = await Cart.findOne({ userId });

    if (!cart) {
      cart = new Cart({ userId, items: [] });
    }

    const itemIndex = cart.items.findIndex(
      (item) => item.productId.toString() == productId
    );
    if (itemIndex > -1) {
        const item = cart.items[itemIndex];

        if(item.qty >qty){
            const pricePerUnit = item.price/item.qty
            
            item.qty -= qty;
            item.price -= pricePerUnit*qty;
        }else{
            cart.items.splice(itemIndex,1)
        }
      
    } else {
      return res.json({message:'Invalid product id'})
    }
    await cart.save();
    res.json({ message: "Items qty decreased", cart, success: true });
}

/* 
Firstly we call addToCart function
1.) Check if the user has a cart already by finding a cart with the userId hai kya nahi.
2.) If no cart exists, create a new cart for the user.
3.) Check if the product to be added already exists in the cart.
4.) If the product exists, increase its quantity and update the price accordingly by comparing productId. By joh Product hai usme product id hoge aur cart ke item mei bhi productId hoga toh dono ko compare karenge
5.) If the product does not exist, add it to the cart with the provided details.
6.) Save the updated cart to the database.
7.) Return a success message along with the updated cart details.
8.) The userId is obtained from the authenticated request (req.user) which is set by the isAuthenticated middleware.
The cart items are stored as an array of objects, where each object contains details about a specific product in the cart, including its productId, title, price, and quantity (qty).   
The userCart function retrieves the cart associated with the authenticated user. It checks if a cart exists for the userId obtained from req.user. If a cart is found, it returns the cart details; otherwise, it responds with a "Cart not found" message.



*/ 