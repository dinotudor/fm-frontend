import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";

class Signup extends Component {
  state = {
    username: "",
    password: "",
    email: "",
    description: "",
    picture: "",
    instruments: "",
    media: "",
    favorites: ""
  };

  handleFormSubmit = event => {
    event.preventDefault();
    const { username, password } = this.state;
    this.props.signup({ username, password });
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { username, password } = this.state;
    return (
      <div className="signup">
        <form className="signup-form" onSubmit={this.handleFormSubmit}>
          <label>Username:</label>
          <input
            className="signup-input"
            type="text"
            name="username"
            value={username}
            onChange={this.handleChange}
          />
          <label>Password:</label>
          <input
            className="signup-input"
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
          />
          <input className="waves-effect waves-light btn-large" type="submit" value="Signup" />
        </form>
        <p>
          Already have account?<br/>
          <Link className="waves-effect waves-light btn-large" to={"/login"}> Login</Link>
        </p>
      </div>
    );
  }
}

export default withAuth(Signup);
