import {
  addCartDAL,
  updateUsersCartDAL,
  checkIfCartExistDAL,
  getUsersCartDAL,
} from "../DataAccessLayer/cart";

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
  const isUpdated = await updateUsersCartDAL(cartId, products);
  const dbCart = await getUsersCartDAL(cartId);
  if (isUpdated.status) {
    return {
      msg: "Product(s) has been updated",
      updatedCart: isUpdated.response,
    };
  } else {
    return {
      msg: "Something went wrong. Product(s) were not updated",
      cartInDB: dbCart,
      cartIdReceived: cartId,
      objReceived: obj,
    };
  }
};

export { addCartSL, updateCartSL };
