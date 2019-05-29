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
      <div className="card-panel green">
        <h4 className="white-text text-darken-2"><i className="material-icons">account_box</i> sign up</h4>
      </div>
        <form className="signup-form" onSubmit={this.handleFormSubmit}>
          <label className="" >username</label>
          <input
            className="input-field col s6"
            type="text"
            name="username"
            placeholder="username"
            value={username}
            onChange={this.handleChange}
          />
          <label>password</label>
          <input
            className="input-field col s6"
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
          />
          <br />
          <input className="waves-effect waves-light btn-large" type="submit" value="Signup" />
        </form>
        <p className="">
          Already have account?<br/>
          <Link className="waves-effect waves-light btn-large" to={"/login"}> Login</Link>
        </p>
      </div>
    );
  }
}

export default withAuth(Signup);
