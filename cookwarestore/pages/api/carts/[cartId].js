import {
  updateUsersCartSL,
  deleteUsersProductsSL,
} from "../../../layers/ServiceLayer/carts";

export default async (req, res) => {
  switch (req.method) {
    case "PATCH":
      return updateUsersCart(req, res);
    case "DELETE":
      return deleteUsersProducts(req, res);
    default:
      return res.json({ msg: "PATCH or DELETE request only" });
  }
};

const updateUsersCart = async (req, res) => {
  try {
    const { cartId } = req.query;
    const results = await updateUsersCartSL(cartId, req.body);
    if (results) {
      res.status(200).json({ msg: "User's cart updated", results });
    } else {
      res.json({ msg: "User's cart not updated", results });
    }
  } catch (err) {
    console.log("err", err.message);
  }
};

const deleteUsersProducts = async (req, res) => {
  try {
    const { cartId } = req.query;
    const results = await deleteUsersProductsSL(cartId);

    if (results) {
      res.status(200).json({ msg: "User's cart deleted", results });
    } else {
      res.json({
        msg: "Something went wrong. User's products not delete",
        results,
      });
    }
  } catch (err) {
    console.log("err", err.message);
  }
};
