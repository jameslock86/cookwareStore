import {
  addCartDAL,
  addProductDAL,
  addQuantityDAL,
  checkIfCartExist,
  checkIfProductExistInCart,
  checkQuantityOfProductInCart,
  getProductsFromCart,
} from "../DataAccessLayer/cart";

import Cart from "../Models/cart/model";

const cartModel = new Cart();

const addCartSL = async (cart) => {
  const userId = cartModel.userId(cart);

  const cartExist = await checkIfCartExist(userId);

  if (cartExist) {
    return { msg: "cart already exist for this user" };
  } else {
    const cartDB = await addCartDAL(cart);
    return { msg: "cart has been added", cartDB };
  }
};

const updateCartSL = async (obj) => {
  // const userId = cartModel.userId(obj);
  // const DBproducts = await getProductsFromCart(userId);
  // console.log("old Products", DBproducts);
  // const productExist = await checkIfProductExistInCart();
  // if (productExist) {
  // } else {
  // }
};

export { addCartSL, updateCartSL };
