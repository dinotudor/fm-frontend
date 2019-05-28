import React, { Component } from "react";
import { withAuth } from "../lib/AuthProvider";
import { Link } from "react-router-dom";

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
          <label>username</label>
          <input
            className="input-field"
            type="text"
            name="username"
            placeholder="username"
            value={username}
            onChange={this.handleChange}
          />
          <label>password</label>
          <input
            className="input-field"
            type="password"
            name="password"
            placeholder="*****"
            value={password}
            onChange={this.handleChange}
          />
          <button className="waves-effect waves-light btn-large" type="submit">login <i className="material-icons">check_circle</i></button>
        </form>
        <p>
          Dont have an account?<br/>
          <Link className="waves-effect waves-light btn-large" to={"/signup"}>Signup</Link>
        </p>
      </div>
    );
  }
}

export default withAuth(Login);
