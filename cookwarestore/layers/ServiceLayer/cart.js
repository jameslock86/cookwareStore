import {
  addCartDAL,
  updateUsersCartDAL,
  addQuantityDAL,
  checkIfCartExistDAL,
  checkIfProductExistInCartDAL,
  checkQuantityOfProductInCartDAL,
  getProductsFromCartDAL,
  getUsersCartDAL,
} from "../DataAccessLayer/cart";
import Cart from "../Models/cart/model";

const cartModel = new Cart();

const addCartSL = async (cart) => {
  const userId = cartModel.userId(cart);
  const cartExist = await checkIfCartExistDAL(userId);

  if (cartExist) {
    return { msg: "cart already exist for this user" };
  } else {
    const cartDB = await addCartDAL(cart);
    return { msg: "cart has been added", cartDB };
  }
};

const updateCartSL = async (cartId, products) => {
  const isUpdated = await updateUsersCartDAL(cartId, products);
  const dbCart = await getUsersCartDAL(cartId);
  if (isUpdated) {
    return {
      msg: "Product(s) have been added",
      cartInDB: dbCart,
    };
  } else {
    return {
      msg: "Something went wrong. Product(s) were not updated",
      cartInDB: dbCart,
      cartIdReceived: cartId,
      productsReceived: products,
    };
  }
};

export { addCartSL, updateCartSL };
