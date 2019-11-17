import shortid from "shortid";
import { ADD_EXPENSE, REMOVE_EXPENSE } from "./actionTypes";

export const addExpense = (name, amount) => ({
  type: ADD_EXPENSE,
  payload: {
    id: shortid.generate(),
    name,
    amount: Number(amount),
  },
});

export const removeExpense = id => ({
  type: REMOVE_EXPENSE,
  payload: id,
});
