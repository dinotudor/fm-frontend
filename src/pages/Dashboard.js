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
      <div className="card-panel center">
        <h4 className="blue-text text-darken-3"><i className="material-icons">library_music</i> find musician</h4>
      </div>
      <form className="form-edit">
        <label><i className="material-icons">search</i></label>
        <input
          placeholder="search"
        />
      </form>
      {profiles.map((profile, index)=>{
        return <Link key={profile._id} to={`userprofile/${profile._id}`}>
              <div className="row">
                <div className="col s12 m6">
                  <div className="card large">
                    <div className="card-image">
                      <img src={profile.image} alt="pic"/>
                      <span className="card-title"></span>
                    </div>
                    <div className="card-content">
                      <h3>{profile.username}</h3>
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
