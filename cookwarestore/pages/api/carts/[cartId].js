import { updateCartSL } from "../../../layers/ServiceLayer/cart";

export default async function cartsHandler(req, res) {
  switch (req.method) {
    case "PATCH":
      return updateUsersCart(req, res);
    default:
      return "No methods where matched at this endpoint";
  }
}

const updateUsersCart = async (req, res) => {
  const { cartId } = req.query;
  try {
    const results = await updateCartSL(cartId, req.body);
    if (results.status) {
      res.status(200).json(results);
    } else {
      res.json(results);
    }
  } catch (err) {
    console.log("err", err);
  }
};
