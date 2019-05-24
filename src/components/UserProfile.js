import React, { Component } from 'react'
import profile from '../lib/profile-service';

class UserProfile extends Component {
  state = {
    profile: [],
  }

  componentDidMount(){
    console.log(this.props)
    profile.getOne()
      .then((profile)=>this.setState({profile}))
  }
  render() {
    const {profile} = this.state;
    return (
      <div>
        <h1>USER profile </h1>

        <p>{profile.username}</p>
      </div>
    )
  }
}

export default UserProfile;
