import { connectToDatabase } from "../../../lib/mongodb";
import { ObjectId } from "mongodb";
const collection = "carts";
export default async function (req, res) {
  const { db } = await connectToDatabase();
  switch (req.method) {
    case "PATCH":
      return addProductToUsersCart(req, res, db);
    case "DELETE":
      return deleteProductsFromUsersCart(req, res, db);
    default:
      return "PATCH request only";
  }
}

const addProductToUsersCart = async (req, res, db) => {
  try {
    const { cartId } = req.query;
    const { products } = req.body;
    const id = ObjectId(cartId);
    let results;
    if (products.length > 0) {
      for (let i = 0; i < products.length; i++) {
        results = await db.collection(collection).update(
          {
            _id: id,
          },
          {
            $push: {
              products: {
                title: products[i].title,
                productId: products[i].productId,
                quantity: products[i].quantity,
              },
            },
          }
        );
      }

      res.status(200).json({
        msg: "Product has been added to user's cart",
        result: results.result.ok,
      });
    }
  } catch (err) {
    console.log("err", err);
  }
};

const deleteProductsFromUsersCart = (req, res, db) => {};
