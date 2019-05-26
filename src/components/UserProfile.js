import React, { Component } from 'react'
import profile from '../lib/profile-service';
import { Link } from 'react-router-dom';

class UserProfile extends Component {
  state = {
    profile: [],
  }

  componentDidMount(){
    console.log('PROPS',this.props)
    const { id } = this.props.match.params;
    profile.getOne(id)
      .then((profile)=> {
      console.log(profile)
      this.setState({profile})
    })
  }
  render() {
    const {profile} = this.state;
    return (
      <div>
        <h1>USER profile </h1>
        <Link to='/dashboard'><button >Home</button></Link>
        <Link to='/profile'><button >My Profile</button></Link>
        <h4>Name</h4>
        <p>{profile.username}</p>
        <h4>BIO</h4>
        <p>{profile.description}</p>
        <h4>instruments</h4>
        <p>{profile.instruments}</p>
        <h4>Likes</h4>
        <p>{profile.genres}</p>

      </div>
    )
  }
}

export default UserProfile;
