import React, { Component } from 'react'
import profile from '../lib/profile-service';
import {withAuth} from './../lib/AuthProvider';
import favorite from './../lib/favorite-service';
import ReactPlayer from 'react-player'

class UserProfile extends Component {
  state = {
    profile: {media: []},
  }

  componentDidMount(){
    console.log('PROPS',this.props)
    const { id } = this.props.match.params;
    profile.getOne(id)
      .then((profile)=> {
        console.log('DID MOUNT USER PROF',profile)
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
        <div className="row">
          <div className="col s12 m6">
            <div className="card">
            <div className="card-image">
              <img src={profile.image} alt="pic"/>
              <button onClick={this.handleFormSubmit} className="btn-floating halfway-fab waves-effect waves-light green"><i class="material-icons">add</i></button>
            </div>
            <div className="card-content">
              <h3>{profile.username}</h3>
              <h4>Bio</h4>
              <p>{profile.description}</p>
              <h4>instruments</h4>
              <p>{profile.instruments}</p>
              <h4>Genres</h4>
              <p>{profile.city}</p>
            </div>
          </div>
        </div>
      </div>
          {
            profile.media.map((mediaObj) =>{
              return <ReactPlayer key={mediaObj._id}url={mediaObj.url} />
            })
          }


      </div>
    )
  }
}

export default withAuth(UserProfile);
