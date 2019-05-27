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
      <Link to='/edit'><button >Edit Profile</button></Link>
      <Link to='/profile'><button >My Profile</button></Link>
      <Link to='/favorites'><button>Favorites</button></Link>
      {profiles.map((profile, index)=>{
        return <Link key={profile._id} to={`userprofile/${profile._id}`}>
                  <h3>{profile.username}</h3>
                  <p>{profile.genres}</p>
                  <p>{profile.instruments}</p>
                  {
                    profile.media.map((mediaObj) =>{
                      return <p key={mediaObj._id}>{mediaObj.url}</p>
                    })
                  }
              </Link>
      })}

      </div>
    )
  }
}
export default Dashboard;
