import React, { Component } from 'react';
import favorite from './../lib/favorite-service';
import {withAuth} from './../lib/AuthProvider';
import {  Link } from "react-router-dom";


class Favorites extends Component {
  state = {
    favorites: [],
  }

  componentDidMount(){
    const { id } = this.props.user._id;
    console.log('ID->',id)
    favorite.getFavorites(id)
      .then((favorites)=>this.setState({favorites}))
  }

  render() {
    const {favorites} = this.state;
    console.log('FAVORITES BY USER -> ',favorites);
    return(
      <div>
        <h1>Favorites</h1>
        <Link to='/dashboard'><button >Home</button></Link>
        <Link to='/edit'><button >Edit Profile</button></Link>
        <Link to='/profile'><button >My Profile</button></Link>
        <Link to='/addmedia'><button >Add Media</button></Link>
        {favorites.map((favorite, index)=>{
        return  <p>{favorite.username}</p>
        })}
      </div>
    )
  }
}

export default withAuth(Favorites);
