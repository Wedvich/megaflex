import React from 'react';
import './button.scss';

const Button = ({ label, clickHandler }) => (
  <button className="button" onClick={clickHandler}>{label}</button>
)

export default Button;
