import {
  addUsersCartDAL,
  updateUsersCartDAL,
  checkUsersCartExistDAL,
  getUsersCartDAL,
} from "../DataAccessLayer/cart";

const getUsersCartSL = async (userId) => {
  try {
    const usersCart = await getUsersCartDAL(userId);
    return usersCart;
  } catch (err) {
    return err;
  }
};
const addUsersCartSL = async (cart) => {
  try {
    const { userId } = cart;
    const cartExist = await checkUsersCartExistDAL(userId);
    const cartAdded = await addUsersCartDAL(cart);
    if (cartExist) {
      return { msg: "cart already exist for this user", usersCart: cartExist };
    }
    if (cartAdded) {
      return { msg: "cart has been added", usersCart: cartAdded };
    }
  } catch (err) {
    return err;
  }
};

const updateUsersCartSL = async (cartId, obj) => {
  try {
    const { userId, products } = obj;
    //for security reasons we are using cartId in the url to find the user's cart
    const isUpdated = await updateUsersCartDAL(cartId, products);
    if (isUpdated) {
      return {
        msg: "Product(s) has been updated",
        updatedCart: isUpdated.response,
      };
    }
  } catch (err) {
    return err;
  }
};

export { addUsersCartSL, updateUsersCartSL, getUsersCartSL };
