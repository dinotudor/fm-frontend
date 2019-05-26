import React, { Component } from 'react'
import {withAuth} from './../lib/AuthProvider';
import { Link } from 'react-router-dom';

class MyProfile extends Component {

  componentDidMount(){
    console.log(this.props.user)

  }
  render() {
    return (
      <div>
      <Link to='/edit'><button >Edit Profile</button></Link>
      <Link to='/dashboard'><button >Home</button></Link>
      <h1>{this.props.user.username}</h1>
      <h4>BIO:</h4>
      <p>{this.props.user.description}</p>
      <h4>Instruments:</h4>
      <p>{this.props.user.instruments}</p>
      <h4>Genres:</h4>
      <p>{this.props.user.genres}</p>

      </div>
    )
  }
}

export default withAuth(MyProfile);
