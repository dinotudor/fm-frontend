import React, { Component } from 'react'
import {withAuth} from './../lib/AuthProvider';
import { Link } from 'react-router-dom';
import profile from './../lib/profile-service'

class MyProfile extends Component {
  state = {
    user: null
  }

  componentDidMount(){
    this.getMyProfile()

  }

  getMyProfile = () => {
    profile.getOne(this.props.user._id)
      .then((data) =>{
        this.setState({user: data})
      })
  }

  componentDidUpdate(prevProps) {
    if (this.props.user !== prevProps.user) {
      this.fetchData(this.props.user);
      console.log('MY PROFILE DID UPDATE -> ', this.PrevProps.user)
    }
  }
  render() {
    return (
      <div>
        <Link to='/dashboard'><button >Home</button></Link>
        <Link to='/edit'><button >Edit Profile</button></Link>
        <Link to='/addmedia'><button >Add Media</button></Link>
        <Link to='/favorites'><button>Favorites</button></Link>
        {
          !this.state.user ?
          <h1>LOADING</h1>
          :
          <div>
            <h1>{this.state.user.username}</h1>

            <h4>BIO:</h4>
            <p>{this.state.user.description}</p>

            <h4>Instruments:</h4>
            <p>{this.state.user.instruments}</p>

            <h4>City:</h4>
            <p>{this.state.user.city}</p>
          </div>
        }
      </div>
    )
  }
}

export default withAuth(MyProfile);
