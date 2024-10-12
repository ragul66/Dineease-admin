import { connectToDb } from "@/utils/database";
import User from "@/models/user";

export const POST = async (req) => {
  const { username, email, password, ph_no } = await req.json();

  await connectToDb();

  try {
    const newUser = new User({
      username,
      email,
      password,
      ph_no,
    });
    await newUser.save();

    return new Response(JSON.stringify(newUser), { status: 201 });
  } catch (error) {
    console.error("Error creating user:", error); // This will help in debugging
    return new Response("Failed to create a user", { status: 500 });
  }
};
