import React, { Component } from 'react'
import profile from '../lib/profile-service';
import {withAuth} from './../lib/AuthProvider';
import favorite from './../lib/favorite-service';
import ReactPlayer from 'react-player'
import email from "./../assets/mail.png"
import facebook from './../assets/facebook.png'
import phone from './../assets/whatsapp.png'

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
              <button onClick={this.handleFormSubmit} className="btn-floating halfway-fab waves-effect waves-light green"><i className="material-icons">add</i></button>
            </div>
            <div className="card-content">
              <h3>{profile.username}</h3>


              <div className="contact-icons">
                <ul className="user-ul">
                  <li className="user-list"><a href={profile.phone} target="_blank" ><img className="icon-img" src={phone} alt="phone"/></a></li>
                  <li className="user-list"><a href={profile.email} target="_blank" ><img className="icon-img" src={email} alt="email"/></a></li>
                  <li className="user-list"><a href={profile.facebook} target="_blank" ><img className="icon-img" src={facebook} alt="facebook"/></a></li>
                </ul>
              </div>
              <h4>Bio</h4>
              <p>{profile.description}</p>
              <h4>instruments</h4>
              <p>{profile.instruments}</p>
              <h4>Genres</h4>
              <p>{profile.genres}</p>
              <h4>City</h4>
              <p>{profile.city}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="card-panel center">
        <h4 className="blue-text text-darken-3"><i className="material-icons">play_circle_filled</i> media</h4>
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
