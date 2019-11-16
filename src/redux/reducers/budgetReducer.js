import { SAVE_BUDGET } from "../actions/actionTypes";

const initialState = 0;

const budgetReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SAVE_BUDGET:
      return payload;

    default:
      return state;
  }
};

export default budgetReducer;
