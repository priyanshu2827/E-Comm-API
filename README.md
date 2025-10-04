# 🛒 E-Commerce API

A complete backend API for an E-Commerce platform built using **Node.js**, **Express**, and **MongoDB**.  
This project provides all core functionalities like user authentication, product management, cart operations, and order handling — forming the backbone of any scalable e-commerce application.

---

## 🧾 Overview

This project implements a robust **E-Commerce REST API** that supports:
- User registration and authentication (JWT-based)
- Role-based access (Admin, Seller, User)
- Product CRUD operations
- Cart and Order management
- Token verification and middleware protection
- Secure password hashing and validation
- Modular and scalable folder structure

The API can easily be integrated with any frontend (React, Angular, or mobile app) to build a full-stack e-commerce application.

---

## ⚙️ Features

✅ **User Authentication** — Register, login, and access protected routes using JWT  
✅ **Role-based Access Control** — Different permissions for Admin, Seller, and Customer  
✅ **Product Management** — Add, update, delete, and view products  
✅ **Cart Management** — Add to cart, update quantity, remove item, and view cart  
✅ **Order System** — Create and view orders  
✅ **Validation & Error Handling** — Handles invalid requests gracefully  
✅ **Scalable Architecture** — Clean separation of controllers, routes, and models  

---

## 🧰 Tech Stack

| Layer / Purpose         | Technology Used |
|--------------------------|-----------------|
| Backend Framework        | Node.js + Express.js |
| Database                 | MongoDB (Mongoose ORM) |
| Authentication           | JWT (jsonwebtoken) |
| Password Hashing         | bcryptjs |
| Environment Variables    | dotenv |
| Request Logger (optional)| morgan |
| API Testing              | Postman / Thunder Client |

---

## 🗂️ API Endpoints
#🧍‍♂️ Authentication Routes
| Method   | Endpoint             | Description                                    |
| -------- | -------------------- | ---------------------------------------------- |
| **POST** | `/api/auth/register` | Register a new user                            |
| **POST** | `/api/auth/login`    | Login and receive a JWT token                  |
| **GET**  | `/api/auth/me`       | Get current logged-in user details (Protected) |

#🛍️ Product Routes
| Method     | Endpoint            | Description                                   |
| ---------- | ------------------- | --------------------------------------------- |
| **GET**    | `/api/products`     | Get all products                              |
| **GET**    | `/api/products/:id` | Get single product by ID                      |
| **POST**   | `/api/products`     | Create new product *(Admin/Seller only)*      |
| **PUT**    | `/api/products/:id` | Update existing product *(Admin/Seller only)* |
| **DELETE** | `/api/products/:id` | Delete a product *(Admin/Seller only)*        |

# 🛒 Cart Routes
| Method     | Endpoint               | Description                               |
| ---------- | ---------------------- | ----------------------------------------- |
| **POST**   | `/api/cart/add`        | Add product to cart                       |
| **GET**    | `/api/cart`            | Get all cart items for the logged-in user |
| **PUT**    | `/api/cart/update/:id` | Update quantity of a cart item            |
| **DELETE** | `/api/cart/remove/:id` | Remove product from cart                  |

#📦 Order Routes
| Method   | Endpoint          | Description                       |
| -------- | ----------------- | --------------------------------- |
| **POST** | `/api/orders`     | Create new order from cart        |
| **GET**  | `/api/orders`     | Get all orders for logged-in user |
| **GET**  | `/api/orders/:id` | Get specific order by ID          |





