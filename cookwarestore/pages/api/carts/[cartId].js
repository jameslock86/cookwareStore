import { connectToDatabase } from "../../../lib/mongodb";
import { ObjectId } from "mongodb";
const collection = "carts";
export default async function (req, res) {
  const { db } = await connectToDatabase();
  switch (req.method) {
    default:
      return "PATCH request only";
  }
}
