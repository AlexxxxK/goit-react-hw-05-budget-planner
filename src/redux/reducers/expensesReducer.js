import { ADD_EXPENSE, REMOVE_EXPENSE } from "../actions/actionTypes";

const initialState = [];

const expensesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_EXPENSE:
      return [...state, payload];

    case REMOVE_EXPENSE:
      return state.filter(expense => expense.id !== payload);

    default:
      return state;
  }
};

export default expensesReducer;
