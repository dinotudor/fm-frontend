import React, { Component } from 'react';
import favorite from './../lib/favorite-service';
import {withAuth} from './../lib/AuthProvider';
import {  Link } from "react-router-dom";


class Favorites extends Component {
  state = {
    favorites: [],
  }

  componentDidMount(){
    console.log('PROPS->',this.props)
    const { _id } = this.props.user;
    console.log('ID->',_id)
    favorite.getFavorites(_id)
      .then(({favorites})=>this.setState({favorites}))
  }

  render() {
    const {favorites} = this.state;
    console.log('FAVORITES BY USER -> ',favorites);
    return(
      <div>
        <Link to='/dashboard'><button >Home</button></Link>
        <Link to='/profile'><button >My Profile</button></Link>
        <h3>Favorites</h3>
        {favorites.map((favoriteObj, index)=>{
        return  <Link key={favoriteObj._id} to={`userprofile/${favoriteObj._id}`}><p>{favoriteObj.username}</p></Link>
        })}
      </div>
    )
  }
}

export default withAuth(Favorites);
