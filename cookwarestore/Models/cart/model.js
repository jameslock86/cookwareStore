class Cart {
  cartId(cart) {
    return cart._id;
  }
  productId(cart) {
    return cart.productId;
  }
  quantity(cart) {
    return cart.quantity;
  }
  userId(obj) {
    return obj.userId;
  }
}

export default Cart;
