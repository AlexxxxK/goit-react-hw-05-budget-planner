import { INPUT_CHANGE, CLEAR_INPUT } from "./actionTypes";

export const inputChange = e => ({
  type: INPUT_CHANGE,
  payload: e.target.value,
});

export const clearInput = () => ({
  type: CLEAR_INPUT,
});
