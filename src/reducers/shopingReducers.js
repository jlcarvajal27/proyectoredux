import {
  ADD_TO_CART,
  CLEAR_CART,
  REMOVE_ALL_FROM_CART,
  REMOVE_ONE_FROM_CART,
} from "../types";

export const initialState = {
  products: [
    { id: 1, name: "producto 1", price: 100 },
    { id: 2, name: "producto 2", price: 200 },
    { id: 3, name: "producto 3", price: 300 },
    { id: 4, name: "producto 4", price: 400 },
    { id: 5, name: "producto 5", price: 500 },
    { id: 6, name: "producto 6", price: 600 },
  ],
  cart: [],
};

export function ShopingReducers(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART: {
      let newItem = state.products.find(
        (products) => products.id === action.payload
      );
      //console.log(newItem);

      let itemInCart = state.cart.find((item) => item.id === newItem.id);

      return itemInCart
        ? {
            ...state,
            cart: state.cart.map((item) =>
              item.id === newItem.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
          }
        : {
            ...state,

            cart: [...state.cart, { ...newItem, quantity: 1 }],
          };
    }

    case REMOVE_ONE_FROM_CART: {
      let ItemToDelete = state.cart.find((item) => item.id === action.payload);
      return ItemToDelete.quantity > 1
        ? {
            ...state,
            cart: state.cart.map((item) =>
              item.id === action.payload
                ? { ...item, quantity: item.quantity - 1 }
                : item
            ),
          }
        : {
            ...state,
            cart: state.cart.filter((item) => item.id !== action.payload),
          };
    }
    case REMOVE_ALL_FROM_CART: {
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };
    }
    case CLEAR_CART:
      return initialState;

    default:
      return state;
  }
}
