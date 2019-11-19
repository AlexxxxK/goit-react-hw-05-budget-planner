import React from "react";
import PropTypes from "prop-types";
import StyledInput from "./styledInput";

const Input = ({
  type = " text",
  value = "",
  onChange = () => null,
  name = "",
  placeholder,
}) => (
  <StyledInput
    type={type}
    value={value}
    onChange={onChange}
    name={name}
    placeholder={placeholder}
  />
);

Input.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string,
  placeholder: PropTypes.string,
};

Input.defaultProps = {
  name: "",
  placeholder: "",
};

export default Input;
