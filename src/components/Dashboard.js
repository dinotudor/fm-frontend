import React, { Component } from 'react'
import { Route, Redirect } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";
import profile from '../lib/profile-service';
//import Navbar from './Navbar';

class Dashboard extends Component {
  state = {
    profiles: [],
  }

  componentDidMount(){
    profile.getAll()
      .then((profiles)=>this.setState({profiles}))
  }

  render() {
    const {profiles} = this.state;
    return (
      <div>
      {profiles.map((profile, index)=>{
        return <p key={profile._id}>{profile.username}</p>
      })}
      </div>
    )
  }
}
export default Dashboard;
