import React, { Component } from 'react'
import {  Link } from "react-router-dom";
//import { withAuth } from "../lib/AuthProvider";
import profile from '../lib/profile-service';
import SearchBar from './../components/SearchBar'

class Dashboard extends Component {
  state = {
    profiles: [],
    filteredProfiles: []
  }

  componentDidMount(){
    profile.getAll()
      .then((profiles)=>{
        this.setState({profiles, filteredProfiles: profiles})})
  }

  filterUserProfiles = (queryString) => {
    const profilesCopy = [...this.state.profiles];
    const queryLowercased = queryString.toLowerCase();
    const filteredProfiles = profilesCopy.filter((profile) => {
      return profile.username.toLowerCase().includes(queryLowercased)
    })
    this.setState({filteredProfiles})
  }

  render() {
    const {filteredProfiles} = this.state;
    return (
      <div>
        <div className="card-panel center">
          <SearchBar filterUserProfiles={this.filterUserProfiles}/>
        </div>

        <div className="row">
          {filteredProfiles.map((profile, index)=>{
            return <Link className="col s12 m4" key={profile._id} to={`userprofile/${profile._id}`}>
              <div className="card large">
                <div className="card-image">
                  <img src={profile.image} alt="pic"/>
                  <span className="card-title"></span>
                </div>
                <div className="card-content">
                  <h3>{profile.username}</h3>
                  <p>
                    Instruments: {profile.instruments} <br />
                    City:{profile.city}
                  </p>
                </div>
              </div>
            </Link>
          })}
        </div>

      </div>
    )
  }
}
export default Dashboard;
