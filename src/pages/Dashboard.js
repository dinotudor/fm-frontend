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
          <h4 className="blue-text text-darken-3"><i className="material-icons">library_music</i> find musician</h4>
          <SearchBar filterUserProfiles={this.filterUserProfiles}/>
      </div>
      {filteredProfiles.map((profile, index)=>{
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
