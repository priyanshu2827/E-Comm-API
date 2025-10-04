# 🛒 E-Commerce API

A complete backend API for an E-Commerce platform built using **Node.js**, **Express**, and **MongoDB**.  
This project provides all core functionalities like user authentication, product management, cart operations, and order handling — forming the backbone of any scalable e-commerce application.

---

## 📚 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Running the Server](#running-the-server)
- [API Endpoints](#api-endpoints)
- [Usage Examples](#usage-examples)
- [Error Handling](#error-handling)
- [License](#license)
- [Contact](#contact)

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

## 🗂️ Project Structure

