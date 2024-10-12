import { connectToDb } from "@utils/database";
import User from "@models/user";

export const GET = async (req) => {
  try {
    await connectToDb();

    // Fetch all users from the database
    const users = await User.find();

    // Return the list of users
    return new Response(JSON.stringify(users), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch users", { status: 500 });
  }
};
