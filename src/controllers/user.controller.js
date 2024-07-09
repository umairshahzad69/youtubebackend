import { asyncHandler } from "../utils/asyncHandler.js";

const registerUser = asyncHandler(async (req, res) => {
  // get user details from frontend
  const { username, email, fullName, password } = req.body
  console.log("email: ",email)
  // validation - not empty
  // check if user already exists & username, email
  // check for images - check for avatar
  // upload image on cloudinary, avatar
  // create user object - create entry in db
  // remove password and refresh token field from response
  // check for user creation
  // return res
  res.status(201).send({ message: "User registered successfully" });
});

export { registerUser };
