import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";

class Navbar extends Component {
  render() {
    const { user, logout, isLoggedin } = this.props;


    this.toggleMenu = () => {
      const menu = document.querySelector(".navbar-menu");
      menu.style.display = menu.style.display === "flex" ? "none" : "flex";
     /*  if (menu.style.display === "flex") {
        setTimeout(() => {
          this.toggleMenu()
        }, 3000);
      } */
    }

    return (
      <nav className="nav-wrapper light-blue darken-4 center logo-navbar">
        <div className="">
          {isLoggedin ? (
            <>
            {/*  <p>username: {user.username}</p> */}
          <button className="waves-effect btn-small white-text menu-button" onClick={this.toggleMenu} style={{ display: "block"}}>
            <i className="material-icons">dehaze</i>
          </button>
            <div className="navbar-menu">
              <Link className="waves-effect waves-light btn-small" to='/dashboard'>Home</Link>
              <Link className="waves-effect waves-light btn-small" to='/profile'>My Profile</Link>
              <Link className="waves-effect waves-light btn-small" to='/favorites'>Favorites</Link>
              <button className="waves-effect waves-light btn-small material-icons" onClick={logout}>exit_to_app</button>
            </div>
            </>
          ) : (
            <>
            <h4 className="white-text"><i className="material-icons">library_music</i></h4>
            </>
          )}
        </div>
      </nav>
    );
  }
}

export default withAuth(Navbar);
