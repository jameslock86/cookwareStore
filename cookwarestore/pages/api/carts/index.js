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

    if (userId) {
      //check if a cart already exist for user
      const cartExist = await checkIfCartExist(userId, db);
      //cartExist should be an object with user's cart info or null
      if (cartExist) {
        //not deconstructing for name conflict reasons
        const dbProducts = cartExist.products;
        // console.log("in cartExist if statement", dbProducts);
        //check if product exist in cart
        const filteredProducts = await compare(products, dbProducts);
        //filteredProducts should be an array of products that don't exist in database or an empty array
        if (filteredProducts.length === 0) {
          console.log("check quantity");
          //check quantity
          const productQuantity = checkProductQuantity();
          //productQuantity should be a number of quantity
          if (productQuantity) {
            //if quantity is the same, do nothing
          } else {
            //if qantity is different, update qantity
          }
        } else {
          //if product(s) do not exist, add product(s) to users cart
          const results = await addProductsToCart(filteredProducts, userId, db);
          res.status(200).json(results);
        }
      } else {
        //if cart doesn't exist, add cart with products by using update function
        const cart = await addCart(products, userId, db);
        res.status(200).json({ msg: "cart added for user", cart: cart });
      }
    } else {
      res.json({ msg: "please include userId" });
    }
  } catch (err) {
    console.log("err", err);
  }
};

const deleteProductsFromUsersCart = async (req, res, db) => {};

/* Helper Functions */
const checkIfCartExist = async (userId, db) => {
  const cart = await db.collection(collection).findOne({ userId });
  return cart;
};

const addCart = async (products, userId, db) => {
  let cartAdded = await db
    .collection(collection)
    .insert({ userId, products: products || [] });
  return cartAdded.ops;
};

const compare = async (products, dbProducts) => {
  //return empty array if all products exist
  //return a list of products that don't exist in database
  const results = products.filter(
    ({ productId: id1 }) =>
      !dbProducts.some(({ productId: id2 }) => id2 === id1)
  );
  return results;
};

const addProductsToCart = async (products, userId, db) => {
  let results = [];
  for (let i = 0; i < products.length; i++) {
    let result = await db.collection(collection).update(
      {
        userId,
      },
      {
        $push: {
          products: {
            productId: products[i].productId,
            quantity: products[i].quantity,
          },
        },
      }
    );
    if (result.result.ok === 1) {
      results.push(products[i]);
    }
  }
  const finalResults = await compare(products, results);
  if (finalResults.length === 0) {
    return { msg: "Product(s) have been added", productsAdded: results };
  } else {
    return {
      msg: "Something went wrong product(s) were not added",
      productsNotAdded: finalResults,
    };
  }
};
const checkProductQuantity = () => {};

const updateProductsInventory = async (products) => {};
/*
*Edge Cases* 
1. If user doesn't exist create a session with user id
*/
