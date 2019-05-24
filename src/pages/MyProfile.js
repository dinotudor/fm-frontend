import React, { Component } from 'react'
import profile from '../lib/profile-service';

class MyProfile extends Component {

  state = {
    profiles: [],
  }

  componentDidMount(){
    profile.getAll()
      .then((profiles)=>this.setState({profiles}))
  }
  render() {
    return (
      <div>

      </div>
    )
  }
}

export default MyProfile;
