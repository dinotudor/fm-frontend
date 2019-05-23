import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";
class Navbar extends Component {
  render() {
    const { user, logout, isLoggedin } = this.props;
    return (
      <div>
        {isLoggedin ? (
          <>
            <p>username: {user.username}</p>
            <button onClick={logout}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
            <Link to="/Dashboard">Home</Link>
            <Link to="/EditProfile">Edit Profile</Link>
            <Link to="/MyProfile">My Profile</Link>
            <Link to="/UserProfile">User Profile</Link>
            <Link to="/Favorite">Favorite</Link>
          </>
        )}
      </div>
    );
  }
}

export default withAuth(Navbar);
