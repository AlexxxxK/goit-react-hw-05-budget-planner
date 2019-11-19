import React from "react";
import PropTypes from "prop-types";
import StyledButton from "./styledButton";

const Button = ({ type, label, onClick }) => (
  <StyledButton type={type} onClick={onClick}>
    {label}
  </StyledButton>
);

Button.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  onClick: () => null,
  type: "button",
  label: "",
};

export default Button;
