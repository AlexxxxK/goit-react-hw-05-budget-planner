import React from "react";
import BudgetForm from "../components/BudgetForm/BudgetForm";
import ExpenseForm from "../components/ExpenseForm/ExpenseForm";
import ExpensesTable from "../components/ExpensesTable/ExpensesTable";
import Values from "../components/Values/Values";
import Container from "./styledContainer";

const App = () => (
  <Container>
    <BudgetForm />
    <Values />
    <ExpenseForm />
    <ExpensesTable />
  </Container>
);

export default App;
