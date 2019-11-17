import {
  INPUT_NAME_CHANGE,
  INPUT_AMOUNT_CHANGE,
  CLEAR_INPUT,
} from "../actions/actionTypes";

const initialState = {
  name: "",
  amount: "",
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case INPUT_NAME_CHANGE:
      return {
        ...state,
        name: payload,
      };

    case INPUT_AMOUNT_CHANGE:
      return {
        ...state,
        amount: payload,
      };

    case CLEAR_INPUT:
      return initialState;

    default:
      return state;
  }
};
