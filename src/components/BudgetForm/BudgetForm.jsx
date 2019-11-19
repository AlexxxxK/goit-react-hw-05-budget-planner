import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import Form from "../shared/Form/Form";
import Label from "../shared/Label/Label";
import Input from "../shared/Input/Input";
import Button from "../shared/Button/Button";
import saveBudget from "../../redux/actions/budgetActions";
import { getInputBudgetValue } from "../../redux/selectors/selectors";
import {
  inputChange,
  clearInput,
} from "../../redux/actions/inputBudgetActions";
import "react-toastify/dist/ReactToastify.css";

toast.configure({
  autoClose: 6000,
  draggable: false,
});

class BudgetForm extends Component {
  static propTypes = {
    saveBudget: PropTypes.func.isRequired,
    inputBudgetValue: PropTypes.string.isRequired,
    inputChange: PropTypes.func.isRequired,
    clearInput: PropTypes.func.isRequired,
  };

  handleSubmit = e => {
    e.preventDefault();
    const { inputBudgetValue, saveBudget, clearInput } = this.props;

    if (Number(inputBudgetValue) <= 0) {
      toast.error("Please enter valid budget amount!", {
        position: toast.POSITION.TOP_CENTER,
      });
      return;
    }

    saveBudget(inputBudgetValue);
    clearInput();
  };

  render() {
    const { inputBudgetValue, inputChange } = this.props;
    return (
      <Form onSubmit={this.handleSubmit}>
        <Label>
          Enter your total budget
          <Input
            type="number"
            value={inputBudgetValue}
            onChange={inputChange}
            placeholder="Budget amount"
          />
        </Label>
        <Button label="Save" type="submit" />
      </Form>
    );
  }
}

const mapStateToProps = state => ({
  inputBudgetValue: getInputBudgetValue(state),
});

const mapDispatchToProps = {
  saveBudget,
  inputChange,
  clearInput,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(BudgetForm);
