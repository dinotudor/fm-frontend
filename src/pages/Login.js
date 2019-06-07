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
      <div className="card-panel green panel-pos">
        <h4 className="white-text text-darken-2"><i className="material-icons">account_box</i> log in</h4>
      </div>
        <form className="login-form" onSubmit={this.handleFormSubmit}>
          <label>username</label>
          <input
            className="input"
            type="text"
            name="username"
            placeholder="username"
            value={username}
            onChange={this.handleChange}
          />
          <label>password</label>
          <input
            className="input"
            type="password"
            name="password"
            placeholder="*****"
            value={password}
            onChange={this.handleChange}
          />
          <br/>
          <button className="waves-effect waves-light btn-large" type="submit">login</button>
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
