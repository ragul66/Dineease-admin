import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
  username: {
    type: String,
    required: [true, "username is required!!"],
  },
  email: {
    type: String,
    unique: [true, "Email already exists"],
    required: [true, "Email is required!"],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },
  ph_no: {
    type: String,
    unique: [true, "Phone Number already exists"],
    required: [true, "Phone Number is required"],
  },
});

const User = models.User || model("User", UserSchema);

export default User;
