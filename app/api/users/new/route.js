import { connectToDb } from "@/utils/database";
import User from "@/models/user";

export const POST = async (req) => {
  const { email, username, password, ph_no } = await req.json();

  await connectToDb();

  try {
    const newUser = new User({
      email,
      username,
      password,
      ph_no,
    });
    await newUser.save();

    return new Response(JSON.stringify(newUser), { status: 201 });
  } catch (error) {
    return new Response("Failed to create a user", { status: 500 });
  }
};
