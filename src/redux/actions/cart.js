import { ACTION_STRING } from "../actions/actionString";

export const dataCart = (data) => {
  return {
    type: ACTION_STRING.setCart,
    payload: data,
  };
};

export const emptyCart = () => {
  return {
    type: ACTION_STRING.cartEmpty,
  };
};
