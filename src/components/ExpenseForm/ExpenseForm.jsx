import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import Form from "../shared/Form";
import Label from "../shared/Label";
import Input from "../shared/Input";
import Button from "../shared/Button";
import {
  inputNameChange,
  inputAmountChange,
  clearInput,
} from "../../redux/actions/inputExpensesActions";
import {
  getInputExpensesName,
  getInputExpensesAmount,
  getBudgetAmount,
} from "../../redux/selectors/selectors";
import { addExpense } from "../../redux/actions/expensesActions";
import "react-toastify/dist/ReactToastify.css";

toast.configure({
  autoClose: 6000,
  draggable: false,
});

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
    budget: PropTypes.number.isRequired,
  };

  handleSubmit = e => {
    e.preventDefault();
    const {
      clearInput,
      inputExpensesName,
      inputExpensesAmount,
      addExpense,
      budget,
    } = this.props;

    if (!budget) {
      toast.error("Please enter your budget first!", {
        position: toast.POSITION.TOP_CENTER,
      });
      return;
    }
    if (inputExpensesName.trim().length === 0) {
      toast.error("Please enter transaction name!", {
        position: toast.POSITION.TOP_CENTER,
      });
      return;
    }
    if (inputExpensesAmount <= 0) {
      toast.error("Please enter valid transaction amount!", {
        position: toast.POSITION.TOP_CENTER,
      });
      return;
    }
    if (inputExpensesAmount > budget) {
      toast.warn(
        "Be careful! Your spending habbits are going to run you into debts!",
        {
          position: toast.POSITION.TOP_CENTER,
        },
      );
    }

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
            placeholder="Expense name"
          />
        </Label>
        <Label customStyles={labelStyles}>
          Enter expense amount
          <Input
            type="number"
            name="amount"
            value={inputExpensesAmount}
            onChange={inputAmountChange}
            placeholder="Expense amount"
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
  budget: getBudgetAmount(state),
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
