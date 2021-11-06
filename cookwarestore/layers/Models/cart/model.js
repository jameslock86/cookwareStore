class Cart {
  cartId(cart) {
    return cart._id;
  }
  products(cart) {}
  quantity(cart) {
    //quantity is nested within products array in cart object
    return cart.quantity;
  }
  userId(obj) {
    return obj.userId;
  }
}

export default Cart;
