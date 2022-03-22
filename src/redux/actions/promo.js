import {ACTION_STRING} from "./actionString";

export const dataPromo = (data) => {
  return {
    type: ACTION_STRING.setPromo,
    payload: data,
  };
};

export const emptyPromo = () => {
  return {
    type: ACTION_STRING.promoEmpty,
  }
}