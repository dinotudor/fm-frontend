import React, { Component } from 'react'
import {withAuth} from './../lib/AuthProvider';
import { Link } from 'react-router-dom';

class MyProfile extends Component {

  componentDidMount(){
    console.log(this.props.user)

  }

  componentDidUpdate() {
    console.log('STATE -> ',this.state)
  }
  render() {
    return (
      <div>
        <Link to='/dashboard'><button >Home</button></Link>
        <Link to='/edit'><button >Edit Profile</button></Link>
        <Link to='/addmedia'><button >Add Media</button></Link>


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
