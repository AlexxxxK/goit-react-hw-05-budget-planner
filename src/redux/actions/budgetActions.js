import { SAVE_BUDGET } from "./actionTypes";

const saveBudget = amount => ({
  type: SAVE_BUDGET,
  payload: Number(amount),
});

export default saveBudget;
