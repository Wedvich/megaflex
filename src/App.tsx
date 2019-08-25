import React from 'react';
import { hot } from 'react-hot-loader/root';

import './app.scss';

const Exercise = ({ title, synopsis }) => (
  <li className="exercise">
    <div className="icon"></div>
    <div className="info">
      <span className="title">{title}</span>
      <span className="synopsis">{synopsis}</span>
    </div>
  </li>
);

// ·

const App = () => (
  <div className="page">
    <h1>Chest</h1>
    <ul>
      <Exercise title="Bench Press" synopsis="4 sets · 6 reps · 70 kg" />
      <Exercise title="Incline Bench Press" synopsis="3 sets · 10 reps · 50 kg" />
      <Exercise title="Decline Bench Press" synopsis="3 sets · 10 reps · 50 kg" />
    </ul>
  </div>
);

export default hot(App);
