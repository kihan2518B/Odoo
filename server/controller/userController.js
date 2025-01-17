import { Organization } from "../models/Organisation.js";
import { catchAsyncErrors } from "../middlewares/catchAsyncErrors.js";
import ErrorHandler from "../middlewares/error.js";

import { User } from "../models/userSchema.js";
import { sendToken } from "../utils/jwtToken.js";

export const register = catchAsyncErrors(async (req, res, next) => {
  // if (!req.files || Object.keys(req.files).length === 0) {
  //   return next(new ErrorHandler("User Avatar Required!", 400));
  // }

  const { name, email, phone, password } = req.body;
  if (!email || !password) {
    return next(new ErrorHandler("Please fill full form!", 400));
  }
  let user = await User.findOne({ email });
  if (user) {
    return next(new ErrorHandler("User already exists!", 400));
  }
  // const cloudinaryResponse = await cloudinary.uploader.upload(
  //   avatar.tempFilePath
  // );
  // if (!cloudinaryResponse || cloudinary.error) {
  //   console.error(
  //     "Cloudinary Error:",
  //     cloudinaryResponse.error || "Unknown cloudinary error!"
  //   );
  // }
  user = await User.create({
    email,
    password,
  });
  sendToken("User Registered!", user, res, 200);
});

export const login = catchAsyncErrors(async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return next(new ErrorHandler("Please provide email and password!", 400));
  }
  const user = await User.findOne({ email }).select("+password");
  if (!user) {
    return next(new ErrorHandler("Invalid email  or password!", 400));
  }
  const isPasswordMatched = await user.comparePassword(password);
  if (!isPasswordMatched) {
    return next(new ErrorHandler("Invalid email  or password!", 400));
  }
  sendToken("User Logged In!", user, res, 200);
});

export const logout = catchAsyncErrors((req, res, next) => {
  res
    .status(200)
    .cookie("token", "", {
      expires: new Date(Date.now()),
      httpOnly: true,
    })
    .json({
      success: true,
      message: "User Logged Out!",
    });
});
export const myProfile = catchAsyncErrors((req, res, next) => {
  const user = req.user;
  res.status(200).json({
    success: true,
    user,
  });
});

export const createOrganization = catchAsyncErrors(async (req, res, next) => {
  const { OrganizationName, TeamName, phone, email } = req.body;

  if (!OrganizationName || !TeamName || !phone || !email) {
    return next(new ErrorHandler("Please fill all fields!", 400));
  }

  const existingOrg = await Organization.findOne({ email });
  if (existingOrg) {
    return next(new ErrorHandler("Organization already exists!", 400));
  }

  const organization = await Organization.create({
    OrganizationName,
    TeamName,
    phone,
    email,
  });

  res.status(201).json({
    success: true,
    message: "Organization created successfully!",
    organization,
  });
});
