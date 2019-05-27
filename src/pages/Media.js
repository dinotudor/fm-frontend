import React, { Component } from 'react'
import { withAuth } from '../lib/AuthProvider';
import media from './../lib/media-service';
import { Link } from "react-router-dom";

class Media extends Component {
  state = {
    medias: [],
  }

  componentDidMount(){
    const { id } = this.props.match;
    media.getMedia(id)
      .then((medias)=>this.setState({medias}))
  }

  render() {
    const { medias } = this.state;
    console.log('MEDIA', medias);
    return (
      <div>
        <Link to='/edit'><button >Edit Profile</button></Link>
        <Link to='/profile'><button >My Profile</button></Link>
        <Link to='/favorites'><button>Favorites</button></Link>
          {
            medias.map((media, index)=>{ return <p> {media} </p> })
          }

      </div>
    )
  }
}

export default withAuth(Media);
