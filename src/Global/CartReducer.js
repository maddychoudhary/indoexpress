export const cartReducer = (state, action) => {
  let { shoppingCart, qty, totalPrice } = state;
  let items;
  let index;
  let updatePrice;
  let updateQty;
  switch (action.type) {
    case "ADD_TO_CART":
      let check = shoppingCart.find((items) => items.id === action.id);
      if (check) {
        return state;
      } else {
        items = action.items;
        items["qty"] = 1;
        updateQty = qty + 1;
        updatePrice = totalPrice + items.price;
        return {
          shoppingCart: [items, ...shoppingCart],
          qty: updateQty,
          totalPrice: updatePrice,
        };
      }
      break;
    case "INC":
      items = action.cart;
      items.qty = items.qty + 1;
      updatePrice = totalPrice + items.price;
      updateQty = qty + 1;
      index = shoppingCart.findIndex((cart) => cart.id === action.id);
      shoppingCart[index] = items;
      return {
        shoppingCart: [...shoppingCart],
        totalPrice: updatePrice,
        qty: updateQty,
      };
      break;

    case "DEC":
      items = action.cart;
      if (items.qty > 1) {
        items.qty = items.qty - 1;
        updatePrice = totalPrice + items.price;
        updateQty = qty - 1;
        index = shoppingCart.findIndex((cart) => cart.id === action.id);
        shoppingCart[index] = items;
        return {
          shoppingCart: [...shoppingCart],
          totalPrice: updatePrice,
          qty: updateQty,
        };
      } else {
        return state;
      }
      break;

    case "DELETE":
      const filtered = shoppingCart.filter((items) => items.id !== action.id);
      items = action.cart;
      updateQty = qty - items.qty;
      updatePrice = totalPrice - items.price * items.qty;
      return {
        shoppingCart: [...filtered],
        totalPrice: updatePrice,
        qty: updateQty,
      };
      break;

    default:
      return state;
  }
};
