import {
  addUsersCartSL,
  getUsersCartSL,
} from "../../../layers/ServiceLayer/carts";

export default async (req, res) => {
  switch (req.method) {
    case "GET":
      return getUsersCart(req, res);
    case "POST":
      return addUsersCart(req, res);
    default:
      return res.json({
        msg: "GET or POST request only",
      });
  }
};

const getUsersCart = async (req, res) => {
  try {
    const { userId } = req.body;
    const results = await getUsersCartSL(userId);
    if (results) {
      res.status(200).json(results);
    } else {
      res.json({ msg: "User's cart not found", results });
    }
  } catch (err) {
    console.log("err", err.message);
  }
};
const addUsersCart = async (req, res) => {
  try {
    const results = await addUsersCartSL(req.body);
    res.json(results);
  } catch (err) {
    console.log("err", err.message);
  }
};
