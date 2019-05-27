import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";

class Navbar extends Component {
  render() {
    const { user, logout, isLoggedin } = this.props;

    return (
      <div>
        {isLoggedin ? (
          <>
           {/*  <p>username: {user.username}</p> */}
          <Link to='/dashboard'><button >Home</button></Link>
          <Link to='/profile'><button >My Profile</button></Link>
          <Link to='/favorites'><button>Favorites</button></Link>
          <button onClick={logout}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
          </>
        )}
      </div>
    );
  }
}

export default withAuth(Navbar);
