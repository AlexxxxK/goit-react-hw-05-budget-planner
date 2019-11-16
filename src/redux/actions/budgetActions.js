import { SAVE_BUDGET } from "./actionTypes";

export const saveBudget = amount => ({
  type: SAVE_BUDGET,
  payload: amount,
});

export const resetBudget = amount => ({
  // type: SAVE_BUDGET,
  payload: amount,
});
