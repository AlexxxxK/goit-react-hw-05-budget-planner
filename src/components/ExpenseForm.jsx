import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Form from "./shared/Form";
import Label from "./shared/Label";
import Input from "./shared/Input";
import Button from "./shared/Button";
import {
  inputNameChange,
  inputAmountChange,
  clearInput,
} from "../redux/actions/inputExpensesActions";
import {
  getInputExpensesName,
  getInputExpensesAmount,
} from "../redux/selectors/selectors";
import { addExpense } from "../redux/actions/expensesActions";

const labelStyles = `
  margin-bottom: 16px;  
`;

class ExpenseForm extends Component {
  static propTypes = {
    inputExpensesName: PropTypes.string.isRequired,
    inputExpensesAmount: PropTypes.string.isRequired,
    inputNameChange: PropTypes.func.isRequired,
    inputAmountChange: PropTypes.func.isRequired,
    clearInput: PropTypes.func.isRequired,
    addExpense: PropTypes.func.isRequired,
  };

  handleSubmit = e => {
    const {
      clearInput,
      inputExpensesName,
      inputExpensesAmount,
      addExpense,
    } = this.props;
    e.preventDefault();
    addExpense(inputExpensesName, inputExpensesAmount);
    clearInput();
  };

  render() {
    const {
      inputExpensesName,
      inputExpensesAmount,
      inputNameChange,
      inputAmountChange,
    } = this.props;
    return (
      <Form onSubmit={this.handleSubmit}>
        <Label customStyles={labelStyles}>
          Enter expense name
          <Input
            type="text"
            name="name"
            value={inputExpensesName}
            onChange={inputNameChange}
          />
        </Label>
        <Label customStyles={labelStyles}>
          Enter expense amount
          <Input
            type="number"
            name="amount"
            value={inputExpensesAmount}
            onChange={inputAmountChange}
            placeholder="0"
          />
        </Label>

        <Button label="Add" type="submit" />
      </Form>
    );
  }
}

const mapStateToProps = state => ({
  inputExpensesName: getInputExpensesName(state),
  inputExpensesAmount: getInputExpensesAmount(state),
});

const mapDispatchToProps = {
  inputNameChange,
  inputAmountChange,
  clearInput,
  addExpense,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ExpenseForm);
