import {
  addCartDAL,
  addProductDAL,
  addQuantityDAL,
  checkIfCartExist,
  checkIfProductExistInCart,
  checkQuantityOfProductInCart,
} from "../DataAccessLayer/cart";

import Cart from "../Models/cart/model";

const cartModel = new Cart();

const addCartSL = async (cart) => {
  const userId = cartModel.userId(cart);
  const cartExist = await checkIfCartExist(userId);
  console.log("carExist", cartExist);
  if (cartExist) {
    return "cart already exist for this user";
  } else {
    await addCartDAL(cart);
    return "cart has been added";
  }
};

const updateCartSL = async (obj) => {
  const productId = cartModel.productId(obj);
  const productExist = await checkIfProductExistInCart(productId);
};

export { addCartSL };
