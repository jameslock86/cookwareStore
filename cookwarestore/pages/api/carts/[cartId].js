import { updateCartSL } from "../../../layers/ServiceLayer/cart";

export default async function cartsHandler(req, res) {
  switch (req.method) {
    case "PATCH":
      return updateUsersCart(req, res);
    default:
      return "";
  }
}

const updateUsersCart = async (req, res) => {
  try {
    const results = await updateCartSL(req.query, req.body);
    if (results) {
      res.status(200).json(results);
    } else {
      res.json({
        msg: "Something went wrong. Product(s) where not added to user's cart",
      });
    }
  } catch (err) {
    console.log("err", err);
  }
};
