import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Private from "./pages/Private";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

import PrivateRoute from "./components/PrivateRoute";
import AnonRoute from "./components/AnonRoute";
import AuthProvider from "./lib/AuthProvider";
import Dashboard from './pages/Dashboard';
import UserProfile from './components/UserProfile';
import MyProfile from './pages/MyProfile';
import EditProfile from './pages/EditProfile';
import AddMedia from './pages/AddMedia';
import Favorites from './pages/Favorites';
import Media from './pages/Media';

class App extends Component {
  render() {
    return (
      <AuthProvider>
        <div className="">
          <Navbar />
          <Switch>
            <AnonRoute path="/signup" component={Signup} />
            <AnonRoute path="/login" component={Login} />
            <PrivateRoute path="/private" component={Private} />
            <PrivateRoute path="/dashboard" component={Dashboard} />
            <PrivateRoute path="/userprofile/:id" component={UserProfile} />
            <PrivateRoute path="/profile" component={MyProfile} />
            <PrivateRoute path="/edit" component={EditProfile} />
            <PrivateRoute path="/addmedia" component={AddMedia} />
            <PrivateRoute path="/favorites" component={Favorites} />
            <PrivateRoute path="/media" component={Media} />
          </Switch>
        </div>
      </AuthProvider>
    );
  }
}

export default App;
