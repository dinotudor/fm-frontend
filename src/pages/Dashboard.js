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
      .then((profiles)=>{
        this.setState({profiles})})
  }

  render() {
    const {profiles} = this.state;
    return (
      <div>
      <div className="card-panel">
        <h4 className="blue-text text-darken-2"><i className="material-icons">library_music</i> find musician</h4>
      </div>
      {profiles.map((profile, index)=>{
        return <Link key={profile._id} to={`userprofile/${profile._id}`}>
              <div className="row">
                <div className="col s12 m6">
                  <div className="card large">
                    <div className="card-image">
                      <img src={profile.image} alt="pic"/>
                      <span class="card-title"></span>
                    </div>
                    <div class="card-content">
                      <h4>{profile.username}</h4>
                      <p>Instruments: {profile.instruments} <br />
                         City:{profile.city}</p>

                  </div>
                </div>
              </div>
            </div>
            </Link>
      })}

      </div>
    )
  }
}
export default Dashboard;
