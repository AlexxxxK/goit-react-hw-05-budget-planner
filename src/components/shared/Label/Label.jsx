import React from "react";
import PropTypes from "prop-types";
import StyledLabel from "./styledLabel";

const Label = ({ children }) => <StyledLabel>{children}</StyledLabel>;

Label.propTypes = {
  children: PropTypes.arrayOf.isRequired,
};

export default Label;
