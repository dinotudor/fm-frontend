import React, { Component } from 'react'
import {withAuth} from './../lib/AuthProvider';
import { Link } from 'react-router-dom';
import profile from './../lib/profile-service';
import ReactPlayer from 'react-player'

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
        console.log(data.media)
      })
  }

  componentDidUpdate(prevProps) {
    if (this.props.user !== prevProps.user) {
      this.fetchData(this.props.user);
      console.log('MY PROFILE DID UPDATE -> ', this.PrevProps.user)
    }
  }
  render() {
    //const { media } = this.data;
    return (
      <div>
        <div className="center">
          <Link className="waves-effect waves-light btn-small" to='/edit'>Edit Profile</Link>
          <Link className="waves-effect waves-light btn-small" to='/addmedia'>Add Media</Link>
        </div>
       <div className="card-panel center">
          <h4 className="blue-text text-darken-2">my profile</h4>
        </div>
        {
          !this.state.user ?
          <h1>LOADING</h1>
          :
          <div>
            <div className="row">
              <div className="col s12 m6">
                <div className="card">
                  <div className="card-image">
                    <img src={this.state.user.image} alt="pic"/>
                    <span className="card-title"><i className="material-icons medium">local_activity</i></span>
                  </div>
                <div className="card-content">
                  <h1>{this.state.user.username}</h1>
                  <h4>Bio:</h4>
                  <p>{this.state.user.description}</p>
                  <h4>Instruments:</h4>
                  <p>{this.state.user.instruments}</p>
                  <h4>City:</h4>
                  <p>{this.state.user.city}</p>
                  <h4>facebook:</h4>
                  <p>{this.state.user.facebook}</p>
                  <h4>phone:</h4>
                  <p>{this.state.user.facebook}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        }

      </div>
    )
  }
}

export default withAuth(MyProfile);
