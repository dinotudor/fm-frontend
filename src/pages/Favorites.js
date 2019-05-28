import React, { Component } from 'react';
import favorite from './../lib/favorite-service';
import {withAuth} from './../lib/AuthProvider';
import {  Link } from "react-router-dom";


class Favorites extends Component {
  state = {
    favorites: [],
  }

  getAllFavorites = () => {
    console.log('PROPS->',this.props)
    const { _id } = this.props.user;
    console.log('ID->',_id)
    favorite.getFavorites(_id)
      .then(({favorites})=>this.setState({favorites}))
  }

  componentDidMount(){
    this.getAllFavorites()
  }
  deleteFavorite = (id) => {
    favorite.deleteFavorite(id)
      .then(() => {
        this.getAllFavorites()

      })
  }

  render() {
    const {favorites} = this.state;
    console.log('FAVORITES BY USER -> ',favorites);
    return(
      <div>
      <div className="card-panel">
        <h4 className="blue-text text-darken-2">Favorites</h4>
      </div>
        {favorites.map((favoriteObj, index)=>{
        return <div className="row">
                <div className="col s12 m6">
                  <div className="card">
                    <div className="card-image">
                     <img src={favoriteObj.image} alt='favPic'/>
                     <span className="card-title"><i class="material-icons medium">favorite</i></span>
                     <button className="btn-floating btn-medium waves-effect waves-light right red" onClick={()=>{this.deleteFavorite(favoriteObj._id)}}><i class="material-icons">remove</i></button>
                    </div>
                    <Link key={favoriteObj._id} to={`userprofile/${favoriteObj._id}`}>
                    <div className="card-content">
                      <h4>{favoriteObj.username}</h4>
                      <p>{favoriteObj.city}</p>
                      <p>{favoriteObj.instruments}</p>
                    </div>
                    </Link>
                  </div>
                </div>
              </div>

        })}
      </div>
    )
  }
}

export default withAuth(Favorites);

