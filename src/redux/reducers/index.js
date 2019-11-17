import { combineReducers } from "redux";
import budgetReducer from "./budgetReducer";
import inputBudgetReducer from "./inputBudgetReducer";
import expensesReducer from "./expensesReducer";
import inputExpensesReducer from "./inputExpensesReducer";

const rootReducer = combineReducers({
  budget: budgetReducer,
  inputBudgetValue: inputBudgetReducer,
  expenses: expensesReducer,
  inputExpenses: inputExpensesReducer,
});

export default rootReducer;
