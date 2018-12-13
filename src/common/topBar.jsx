import React, { Component } from 'react';
import './topBar.scss';

export default class TopBar extends Component {
  render() {
    return (
      <section className="top-bar">
        <div className="title">{this.props.title}</div>
      </section>
    );
  }
}
