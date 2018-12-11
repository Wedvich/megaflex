import React, { Component } from 'react';
import './loginForm.scss';

export default class LoginPage extends Component {
  render() {
    return (
      <form className="login-form" onSubmit={e => e.preventDefault()}>
        <h1>MEGAFLEX</h1>
        <button type="submit">Sign in</button>
      </form>
    );
  }
}
