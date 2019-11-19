import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Stat from "./Stat/Stat";
import Container from "./styledSection";
import { getBudgetAmount, getExpenses } from "../../redux/selectors/selectors";
import calculateBalance from "../../helpers/calculateBalance";
import calculateTotalExpenses from "../../helpers/calculateTotalExpenses";

const Values = ({ budget, expenses }) => {
  const totalExpenses = calculateTotalExpenses(expenses);
  const balance = calculateBalance(budget, totalExpenses);
  return (
    <Container>
      <Stat label="Budget" value={budget} isPositive />
      <Stat label="Expenses" value={totalExpenses} isPositive={false} />
      <Stat label="Balance" value={balance} isPositive={balance >= 0} />
    </Container>
  );
};

Values.propTypes = {
  budget: PropTypes.number.isRequired,
  expenses: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};

const mapStateToProps = state => ({
  budget: getBudgetAmount(state),
  expenses: getExpenses(state),
});

export default connect(
  mapStateToProps,
  null,
)(Values);
