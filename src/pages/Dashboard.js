import React, { Component } from 'react'
import {  Link } from "react-router-dom";
//import { withAuth } from "../lib/AuthProvider";
import profile from '../lib/profile-service';

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
        return <Link key={profile._id} to={`userprofile/${profile._id}`}>
                  <p >{profile.username}</p>
              </Link>
      })}
      </div>
    )
  }
}
export default Dashboard;
