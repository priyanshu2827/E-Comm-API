// E-Commerce API

import express from "express";
import mongoose from "mongoose";
import { config } from "dotenv";
import userRouter from "./Routes/user.js";
import productRouter from './Routes/product.js';// jab bhi product router banegeya humhe /Routes/product laga na hei hoga
import cartRouter from './Routes/cart.js' // cart router import kiya
const app = express();

// .env setup
config({ path: ".env" });

// Middleware
app.use(express.json()); // ✅ replaces body-parser

// user Routes
app.use("/api/user", userRouter);

// product router
app.use('/api/product',productRouter);

// cart router
app.use('/api/cart',cartRouter);

// Home route
app.get("/", (req, res) => {
  res.json({ message: "This is home route working" });
});

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI, {
    dbName: "EComAPI", // database name
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected..!"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Start server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


/*
“🌟 E - Commerce API 🌟

1.) User API Endpoints:
POST - api/user/register :- Register a new user
POST - api/user/login :- Login existing user

2.) Product’s API Endpoints:
POST - api/product/add :- Create a new product.
GET - api/product/all :- Retrieve all products.
GET - api/product/id :- Get a specific product by ID.
PUT - api/product/id :- Update a product by ID.
DELETE - api/product/id :- Delete a product by ID.

3.) Cart API Endpoints:
POST - api/cart/add :- Add a product to the cart. [ Authentication Req. ]
GET - api/cart/user :- Retrieve the user specific cart. [ Authentication Req. ]
POST - api/cart/ -qty :- Decrease the quantity of product in the cart. [ Authentication Req. ]
DELETE - api/cart/remove/:productId :- Remove a product from the cart. [ Authentication Req. ]
DELETE - api/cart/clear :- Delete all product from the cart. [ Authentication Req. ]”




Abhi cart mei add karne ke phele humhe user ke id lage ke for login for which hum postman mei headers
 mei auth likh ke jwttoken key dena hai  WRONG TOKEN GENERAYTED IS OF LOGIN KE TIME JWT CREATE KARTA HAI VOH HAI

*/

