import React from "react";
import PropTypes from "prop-types";
import { Container, Label, Value } from "./styledComponents";

const Stat = ({ label, value, isPositive }) => (
  <Container isPositive={isPositive}>
    <Label>{label}</Label>
    <Value>{value}&nbsp;&#x24;</Value>
  </Container>
);

Stat.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  isPositive: PropTypes.bool.isRequired,
};

export default Stat;
