import { User } from "../Models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// User Register Controller
export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // 1️⃣ Check if user already exists
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({
        message: "User already exists",
        success: false,
      });
    }

    // 2️⃣ Hash password
    const hashPassword = await bcrypt.hash(password, 10);

    // 3️⃣ Create new user
    user = await User.create({
      name,
      email,
      password: hashPassword,
    });

    // 4️⃣ Remove password before sending response
    const { password: _, ...userWithoutPassword } = user.toObject();

    // 5️⃣ Send success response
    return res.status(201).json({
      message: "User Register Successfully...!",
      user: userWithoutPassword,
      success: true,
    });

    // Added error handling
  } catch (error) {
    console.error("Register Error:", error);
    return res.status(500).json({
      message: "Server Error",
      success: false,
    });
  }
};

// user login

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // 1️⃣ Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        message: "User does not exist",
        success: false,
      });
    }

    // 2️⃣ Compare password
    const validPass = await bcrypt.compare(password, user.password);
    if (!validPass) {
      return res.status(400).json({
        message: "Invalid credentials",
        success: false,
      });
    }

    // 3️⃣ Generate JWT token
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1d", // token expires in 1 day
    });

    // 4️⃣ Remove password before sending response
    const { password: _, ...userWithoutPassword } = user.toObject();

    // 5️⃣ Send success response
    return res.status(200).json({
      message: `Welcome ${user.name}`,
      token,
      user: userWithoutPassword,
      success: true,
    });
  } catch (error) {
    console.error("Login Error:", error);
    return res.status(500).json({
      message: "Server Error",
      success: false,
    });
  }
};
