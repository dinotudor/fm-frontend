import React, { Component } from "react";
import { withAuth } from "../lib/AuthProvider";

class Login extends Component {
  state = {
    username: "",
    password: ""
  };

  handleFormSubmit = event => {
    event.preventDefault();
    const { username, password } = this.state;
    this.props.login({ username, password });
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { username, password } = this.state;
    return (
      <div className="login">
        <form className="login-form" onSubmit={this.handleFormSubmit}>
          <label>Username:</label>
          <input
            className="login-input"
            type="text"
            name="username"
            value={username}
            onChange={this.handleChange}
          />
          <label>Password:</label>
          <input
            className="login-input"
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
          />
          <input className="btn" type="submit" value="Login" />
        </form>
      </div>
    );
  }
}

export default withAuth(Login);
