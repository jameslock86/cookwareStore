import { Db } from "mongodb";
import {
  addCartDAL,
  updateUsersCartDAL,
  checkIfCartExistDAL,
  getUsersCartDAL,
} from "../DataAccessLayer/cart";

const getUsersCartSL = async (userId) => {
  const usersCart = await getUsersCartDAL(userId);
  return usersCart;
};
const addCartSL = async (cart) => {
  const { userId } = cart;
  const cartExist = await checkIfCartExistDAL(userId);

  if (cartExist) {
    return { msg: "cart already exist for this user" };
  } else {
    const isAdded = await addCartDAL(cart);
    if (isAdded.status) {
      return { msg: "cart has been added", usersCart: isAdded.response };
    } else {
      return false;
    }
  }
};

const updateCartSL = async (cartId, obj) => {
  const { userId, products } = obj;
  //for security reasons we are using cartId in the url to find the user's cart
  const isUpdated = await updateUsersCartDAL(cartId, products);
  const dbCart = await getUsersCartDAL(userId);
  if (isUpdated.status) {
    return {
      status: true,
      msg: "Product(s) has been updated",
      updatedCart: isUpdated.response,
    };
  } else {
    return {
      status: false,
      msg: "Something went wrong. Product(s) were not updated",
      cartInDB: dbCart,
      cartIdReceived: cartId,
      objReceived: obj,
    };
  }
};

export { addCartSL, updateCartSL, getUsersCartSL };
