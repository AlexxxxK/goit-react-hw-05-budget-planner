import { INPUT_CHANGE, CLEAR_INPUT } from "../actions/actionTypes";

const initialState = "";

const inputBudgetReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case INPUT_CHANGE:
      return payload;

    case CLEAR_INPUT:
      return initialState;

    default:
      return state;
  }
};

export default inputBudgetReducer;
