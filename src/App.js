import React, { Component } from "react";
import { Switch } from "react-router-dom";

import Navbar from "./components/Navbar";
import Private from "./pages/Private";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

import PrivateRoute from "./components/PrivateRoute";
import AnonRoute from "./components/AnonRoute";
import AuthProvider from "./lib/AuthProvider";
import Dashboard from './components/Dashboard';

class App extends Component {
  render() {
    return (
      <AuthProvider>
        <div className="container">
          <h1>FM - Find Musician</h1>
          <Navbar />
          <Switch>
            <AnonRoute path="/signup" component={Signup} />
            <AnonRoute path="/login" component={Login} />
            <PrivateRoute path="/private" component={Private} />
            <PrivateRoute path="/dashboard" component={Dashboard} />
          </Switch>
        </div>
      </AuthProvider>
    );
  }
}

export default App;
