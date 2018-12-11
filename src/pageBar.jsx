import React from 'react';
import './pageBar.scss';
import Button from './common/button';

const PageBar = ({ title, goBack }) => (
  <nav className="page-bar">
    {goBack && <Button label="Back" clickHandler={goBack} />}
    <span>{title}</span>
  </nav>
);

export default PageBar;
