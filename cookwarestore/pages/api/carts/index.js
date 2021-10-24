import clientPromise from "../../../lib/mongodb";

export default async function getCartsByUserIdHandler(req, res) {
  console.log("req", req.query);
  //check if userId exist
  //if userId doesn't exist, send message "user does not exist"
  //if userId exist
  //get user's cart
  res.send("ok");
}
