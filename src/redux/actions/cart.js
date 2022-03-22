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

// export const dataPromo = (data) => {
//   return {
//     type: ACTION_STRING.setPromo,
//     payload: data,
//   };
// };

// export const emptyPromo = () => {
//   return {
//     type: ACTION_STRING.promoEmpty,
//   }
// }