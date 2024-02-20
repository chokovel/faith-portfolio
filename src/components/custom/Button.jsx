import React from 'react'
import PropTypes from 'prop-types'
import "./button.css";
import { Link } from "react-router-dom";

const Button = ({label, to, href}) => {
  return (
    <a
      className="custom-button"
      to={to}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {label}
    </a>
  );
}

Button.propTypes = {

}

export default Button
