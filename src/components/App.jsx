import React, { Component } from "react";
import styled from "styled-components";
import shortid from "shortid";
import BudgetForm from "./BudgetForm";
import ExpenseForm from "./ExpenseForm";
import ExpensesTable from "./ExpensesTable";
import Values from "./Values";
import calculateBalance from "../helpers/calculateBalance";
import calculateTotalExpenses from "../helpers/calculateTotalExpenses";

const Container = styled.div`
  display: grid;
  grid-template-columns: 340px 1fr;
  align-items: flex-start;
  grid-gap: 24px;
  max-width: 960px;
  padding-left: 16px;
  padding-right: 16px;
  margin-left: auto;
  margin-right: auto;
`;

export default class App extends Component {
  state = {
    budget: 0,
    expenses: [],
  };

  saveBudget = value => {
    this.setState({ budget: value });
  };

  addExpense = ({ name, amount }) => {
    const expense = {
      id: shortid.generate(),
      name,
      amount: Number(amount),
    };

    this.setState(state => ({
      expenses: [expense, ...state.expenses],
    }));
  };

  removeExpense = id => {
    this.setState(state => ({
      expenses: state.expenses.filter(expense => expense.id !== id),
    }));
  };

  render() {
    const { expenses, budget } = this.state;
    const totalExpenses = calculateTotalExpenses(expenses);
    const balance = calculateBalance(budget, totalExpenses);

    return (
      <Container>
        <BudgetForm onSave={this.saveBudget} />
        <Values budget={budget} expenses={totalExpenses} balance={balance} />
        <ExpenseForm onSave={this.addExpense} />
        {expenses.length > 0 && (
          <ExpensesTable items={expenses} onRemove={this.removeExpense} />
        )}
      </Container>
    );
  }
}
