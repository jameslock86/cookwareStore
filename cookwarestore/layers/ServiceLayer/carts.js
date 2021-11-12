import {
  addUsersCartDAL,
  updateUsersCartDAL,
  deleteUsersProductsDAL,
  checkUsersCartExistDAL,
  getUsersCartDAL,
} from "../DataAccessLayer/carts";

const getUsersCartSL = async (id) => {
  try {
    const usersCart = await getUsersCartDAL(id);
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

const updateUsersCartSL = async (id, obj) => {
  try {
    const { userId, products } = obj;
    const cartUpdated = await updateUsersCartDAL(id, products);
    return cartUpdated;
  } catch (err) {
    return err;
  }
};

const deleteUsersProductsSL = async (id) => {
  try {
    const cartDeleted = await deleteUsersProductsDAL(id);
    return cartDeleted;
  } catch (err) {
    return err;
  }
};

export {
  addUsersCartSL,
  updateUsersCartSL,
  getUsersCartSL,
  deleteUsersProductsSL,
};
