import {
  addUsersCartSL,
  getUsersCartSL,
} from "../../../layers/ServiceLayer/cart";

export default async function cartsHandler(req, res) {
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
}

const getUsersCart = async (req, res) => {
  const { userId } = req.body;
  const results = await getUsersCartSL(userId);
  if (results) {
    res.status(200).json(results);
  } else {
    res.json({ msg: "User's cart not found", results });
  }
};
const addUsersCart = async (req, res) => {
  const results = await addUsersCartSL(req.body);
  if (results) {
    res.status(200).json(results);
  } else {
    res.json({
      msg: "Something went wrong. Cart was not added",
      results,
    });
  }
};
