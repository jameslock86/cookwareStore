import { updateUsersCartSL } from "../../../layers/ServiceLayer/cart";

export default async function cartsHandler(req, res) {
  switch (req.method) {
    case "PATCH":
      return updateUsersCart(req, res);
    case "DELETE":
      return deleteProductsFromUsersCart(req, res);
    default:
      return "No methods where matched at this endpoint";
  }
}

const updateUsersCart = async (req, res) => {
  const { cartId } = req.query;
  const results = await updateUsersCartSL(cartId, req.body);
  if (results) {
    res.status(200).json(results);
  } else {
    res.json({ msg: "User's cart not updated", results });
  }
};

const deleteProductsFromUsersCart = async (req, res, db) => {};
