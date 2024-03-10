import React from 'react'
import "./button.css";

const Button = ({ label, to, href }) => {
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
};


export default Button
