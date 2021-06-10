import React from "react";
import PropTypes from "prop-types";

const Display = (props) => {
  const { result } = props;
  return <h5>{result}</h5>;
};

export default Display;
