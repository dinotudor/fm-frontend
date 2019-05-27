import React, { Component } from 'react'
import { withAuth } from '../lib/AuthProvider';
import media from './../lib/media-service';
import { Link } from "react-router-dom";

class Media extends Component {
  state = {
    media: [],
  }

  componentDidMount(){
    const { id } = this.props.match;
    console.log('DID MOUNT', this.props.match)
    media.getMedia(id)
      .then(({media})=>this.setState({media}))
  }

  render() {
    const { media } = this.state;
    console.log('MEDIA', media);
    return (
      <div>
        <Link to='/edit'><button >Edit Profile</button></Link>
        <Link to='/profile'><button >My Profile</button></Link>
        <Link to='/favorites'><button>Favorites</button></Link>
        {
          media.map((mediaObj) => <h1 key={mediaObj._id}>{mediaObj.title}</h1>)
        }

      </div>
    )
  }
}

export default withAuth(Media);
