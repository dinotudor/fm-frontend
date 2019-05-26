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
        <Link to='/dashboard'><button >Home</button></Link>
        <Link to='/profile'><button >My Profile</button></Link>
        <h1>{profile.username}</h1>
        <h4>BIO</h4>
        <p>{profile.description}</p>
        <h4>instruments</h4>
        <p>{profile.instruments}</p>
        <h4>Likes</h4>
        <p>{profile.genres}</p>
        <Link to="/addFavorites"><button>Add favorite</button></Link>

      </div>
    )
  }
}

export default UserProfile;
