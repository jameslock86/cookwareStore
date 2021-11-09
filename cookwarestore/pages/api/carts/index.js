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
      return "No cases found";
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

/* Helper Functions */

const compare = async (products, dbProducts) => {
  //return empty array if all products exist
  //return a list of products that don't exist in database
  const results = products.filter(
    ({ productId: id1 }) =>
      !dbProducts.some(({ productId: id2 }) => id2 === id1)
  );
  return results;
};

/*
*Edge Cases* 
1. If user doesn't exist create a session 
*/
