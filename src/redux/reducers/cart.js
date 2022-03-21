import { ACTION_STRING } from "../actions/actionString";

const initialState = {
  products: [],
  subTotal: 0,
  delivery: "",
};

const cartReducer = (prevState = initialState, action) => {
  const { setCart, cartEmpty } = ACTION_STRING;
  switch (action.type) {
    case setCart:
      if (
        prevState.products.findIndex(
          (item) =>
            item.product_id === action.payload.product_id &&
            item.size === action.payload.size
        ) === -1
      ) {
        return {
          ...prevState,
          products: [...prevState.products, action.payload],
          subTotal:
            prevState.subTotal + action.payload.price * action.payload.quantity,
          delivery: action.payload.delivery,
        };
      } else {
        return {
          ...prevState,
          products: prevState.products.map((product) => {
            if (
              product.product_id === action.payload.product_id &&
              product.size === action.payload.size
            ) {
              return {
                ...product,
                quantity: product.quantity + action.payload.quantity,
              };
            }
            return product;
          }),
          subTotal:
            prevState.subTotal + action.payload.price * action.payload.quantity,
          delivery: action.payload,
        };
      }

    case cartEmpty:
      return initialState;

    default:
      return prevState;
  }
};

export default cartReducer;
