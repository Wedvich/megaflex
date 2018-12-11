import React from 'react';
import './pageBar.scss';

const PageBar = ({ title, goBack }) => (
  <nav className="page-bar">
    <button onClick={goBack}>Back</button>
    <span>{title}</span>
  </nav>
);

export default PageBar;
