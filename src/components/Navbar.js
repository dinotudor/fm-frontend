import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";

class Navbar extends Component {
  render() {
    const { user, logout, isLoggedin } = this.props;

    return (
      <nav className="nav-wrapper purple darken-3 center">
        <div className="">
          {isLoggedin ? (
            <>
            {/*  <p>username: {user.username}</p> */}
            <Link className="waves-effect waves-light btn-small" to='/dashboard'>Home</Link>
            <Link className="waves-effect waves-light btn-small" to='/profile'>My Profile</Link>
            <Link className="waves-effect waves-light btn-small" to='/favorites'>Favorites</Link>
            <button className="waves-effect waves-light btn-small material-icons" onClick={logout}>exit_to_app</button>
            </>
          ) : (
            <>
              <Link to="/login">Login</Link>
              <Link to="/signup">Signup</Link>
            </>
          )}
        </div>
      </nav>
    );
  }
}

export default withAuth(Navbar);
