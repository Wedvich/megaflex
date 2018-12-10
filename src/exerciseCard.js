import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './exerciseCard.scss';

export default class ExerciseCard extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired
  }

  state = {
    sets: [],
    nextId: 1
  }

  addSet = () => this.setState(state => ({
    sets: [...state.sets, { id: state.nextId, repetitions: 0, weight: 0 }],
    nextId: state.nextId + 1
  }))

  removeSet = (id) => this.setState(state => ({
    sets: state.sets.filter(s => s.id !== id)
  }))

  render() {
    const { name } = this.props;
    const { sets } = this.state;

    return (
      <div className="exercise-card">
        <div className="name">{name}</div>
        {sets.map((s, i) => (
          <div className="set" key={s.id}>
            <span>Set {i + 1}</span>
            <label>Reps</label>
            <input type="number" />
            <label>Weight</label>
            <input type="number" />
            <button onClick={() => this.removeSet(s.id)}>Remove</button>
          </div>
        ))}
        <div className="menu">
          <button onClick={this.addSet}>Add set</button>
        </div>
      </div>
    );
  }
}
