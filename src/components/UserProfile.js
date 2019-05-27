import React, { Component } from 'react'
import profile from '../lib/profile-service';
import {withAuth} from './../lib/AuthProvider';
import { Link } from 'react-router-dom';
import favorite from './../lib/favorite-service';

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

  handleFormSubmit = (e) => {
    e.preventDefault();
    console.log('FAVORITE ID -> ', this.props.match.params)
    console.log('USER ID -> ', this.props.user._id)
    const { _id: userId } = this.props.user;
    const { id: favoriteId } = this.props.match.params;

    favorite.addFavorite(userId, favoriteId)
     .then((data) => data);

  }

  render() {
    const {profile} = this.state;
    console.log('USER ID', profile)
    return (
      <div>
        <Link to='/dashboard'><button >Home</button></Link>
        <Link to='/profile'><button >My Profile</button></Link>
        <h1>{profile.username}</h1>
        <h4>BIO</h4>
        <p>{profile.description}</p>
        <h4>instruments</h4>
        <p>{profile.instruments}</p>
        <h4>Genres</h4>
        <p>{profile.city}</p>
        <form onSubmit={this.handleFormSubmit}>
          <input type="submit" value="Add Favorite" />
        </form>

      </div>
    )
  }
}

export default withAuth(UserProfile);
