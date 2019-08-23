import React from 'react';
import { hot } from 'react-hot-loader/root';

import './app.css';

const App = () => (
  <>
    <h1>Chest</h1>
    <ul>
      <li>
        <span className="title">Bench Press</span>
        <span className="synopsis">4 sets &#183; 6 reps &#183; 70 kg</span>
      </li>
      <li>
        <span className="title">Incline Bench Press</span>
        <span className="synopsis">3 sets &#183; 10 reps &#183; 50 kg</span>
      </li>
      <li>
        <span className="title">Decline Bench Press</span>
        <span className="synopsis">3 sets &#183; 10 reps &#183; 50 kg</span>
      </li>
    </ul>
  </>
);

export default hot(App);
