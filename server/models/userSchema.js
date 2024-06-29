import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const userSchema = new mongoose.Schema({
  
  email: {
    type: String,
    required: [true, "Please provide your email!"],
    unique: [true, "User already registered!"],
    validate: [validator.isEmail, "Please provide valid email!"],
  },

  password: {
    type: String,
    required: [true, "Please provide your password!"],
    minLength: [8, "Password must contain at least 8 characters!"],
    maxLength: [32, "Password cannot exceed 32 characters!"],
    select: false,
  },
  Admin: {
    type: Boolean,
    default: false,
  },
  online: {
    type: Boolean,
    default: false,
  },
});

userSchema.pre("save", async function () {
  if (!this.isModified("password")) {
    next();
  }
  this.password = await bcrypt.hash(this.password, 10);
});

userSchema.methods.comparePassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

userSchema.methods.getJWTToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET_KEY, {
    expiresIn: process.env.JWT_EXPIRES,
  });
};

export const User = mongoose.model("User", userSchema);
