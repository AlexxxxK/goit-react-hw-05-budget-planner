import {
  INPUT_NAME_CHANGE,
  INPUT_AMOUNT_CHANGE,
  CLEAR_INPUT,
} from "./actionTypes";

export const inputNameChange = e => ({
  type: INPUT_NAME_CHANGE,
  payload: e.target.value,
});

export const inputAmountChange = e => ({
  type: INPUT_AMOUNT_CHANGE,
  payload: e.target.value,
});

export const clearInput = () => ({
  type: CLEAR_INPUT,
});
