import { connectToDatabase } from "../../../lib/mongodb";
import { ObjectId } from "mongodb";

const collection = "carts";
export default async function cartsHandler(req, res) {
  const { db } = await connectToDatabase();

  switch (req.method) {
    // case "POST":
    //   return addCart(req, res, db);
    case "PATCH":
      return updateUsersCart(req, res, db);
    case "DELETE":
      return deleteProductsFromUsersCart(req, res, db);
    default:
      return "No cases found";
  }
}

// const addCart = async (req, res, db) => {
//   try {
//     if (req.body.userId) {
//       const userId = ObjectId(req.body.userId);
//       //get user's cart
//       const usersCart = await db.collection(collection).findOne({ userId });
//       res.json({
//         msg: "Cart already exist for user. Please make a PATCH request to users cart _id ",
//         usersCart,
//       });
//     }
//   } catch (err) {
//     console.log("err", err);
//   }
// };

/*task to be do: 
  1. check to see if product has already been added to user's cart
  2. check if quantity has changed
  3. update products quantity in products colletion and set a timer to reverse the product quantity if user doesn't purchase product after a 
     certain amount of time
*/
const updateUsersCart = async (req, res, db) => {
  try {
    const { userId, products } = req.body;
    const uid = ObjectId(userId);
    if (req.body.userId) {
      //check if a cart already exist for user
      //if cart doesn't exist, add cart with products by using update function
      //if cart exist, check if product exist in cart
      //if product exist, check quantity
      //if quantity is the same, do nothing
      //if qantity is different, update qantity
    } else {
      res.json({ msg: "please include user's id" });
    }
  } catch (err) {
    console.log("err", err);
  }
};
const addProductToUsersCart = async (req, res, db) => {
  try {
    const { products, userId } = req.body;
    const id = ObjectId(userId);
    if (products.length > 0) {
      const isProductInCart = checkProductInUsersCart(id, products, db);
      if (isProductInCart) {
        console.log("isProductInCart", isProductInCart);
        //compare quantity

        //update products quantity if needed
        // updateProductsInventory(products);
        res.status(200).json({ msg: "quantity updated" });
      }
      // else {
      //   //add product to cart
      //   addProductToCart(userId, products, db);
      //   //update products collection quantity
      //   updateProductsInventory(products);
      //   res.status(200).json({ msg: "Product has been added to user's cart" });
      // }
    }
  } catch (err) {
    console.log("err", err);
  }
};

const deleteProductsFromUsersCart = async (req, res, db) => {};

/* Helper Functions */
const checkProductInUsersCart = async (uid, userProducts, db) => {
  let productResults;
  const cart = await db.collection(collection).findOne({ userId: uid });
  if (cart) {
    const { products, userId, _id } = cart;
    for (let i = 0; i < userProducts.length; i++) {
      productResults = products.filter((product) => {
        return product === userProducts[i];
      });
    }
    console.log("productResults", productResults);
  } else {
    console.log("cart", cart);
  }
};

const addProductToCart = async (product) => {
  const { result } = await db.collection(collection).update(
    {
      userId: id,
    },
    {
      $push: {
        products: {
          productId: product.productId,
          quantity: product.quantity,
        },
      },
    }
  );
  return result.ok;
};

const updateProductsInventory = async (products) => {};
/*
*Edge Cases* 
1. If user doesn't exist create a session with user id
*/
