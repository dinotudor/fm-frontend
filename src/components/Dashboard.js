import React from 'react'
import { Route, Redirect } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";

function Dashboard ({component: Component, isLoggedin, ...rest }) {
    return (
      <div>
        <h1>HELLO!</h1>
    </div>
  );
 }

export default withAuth(Dashboard);
