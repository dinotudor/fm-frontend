import React, { Component } from 'react'
import {withAuth} from './../lib/AuthProvider';
import { Link } from 'react-router-dom';
import profile from './../lib/profile-service';
import ReactPlayer from 'react-player';

class MyProfile extends Component {
  state = {
    user: null,
    loading: true,
  }

  componentDidMount(){
    this.getMyProfile()

  }

  getMyProfile = () => {
    profile.getOne(this.props.user._id)
      .then((data) =>{
        this.setState({user: data, loading: false,})

      })
  }

  componentDidUpdate(prevProps) {
    if (this.props.user !== prevProps.user) {
      this.fetchData(this.props.user);
      console.log('MY PROFILE DID UPDATE -> ', this.PrevProps.user)
    }
  }
  render() {
    console.log("rendering");
    const {loading} = this.state;

    return (
      <div>
       <div className="card-panel center">
          <h4 className="blue-text text-darken-3">my profile</h4>
        </div>
        {
          !this.state.user ?
          <h1>LOADING</h1>
          :
          <div>
            <div className="row">
              <div className="col s12 m12">
                <div className="card">
                  <div className="card-image">
                    <img src={this.state.user.image} alt="pic"/>
                    <span className="card-title"><i className="material-icons medium">local_activity</i></span>
                  </div>
                <div className="center">
                  <Link className="waves-effect waves-light btn-small" to='/edit'>Edit Profile</Link>
                  <Link className="waves-effect waves-light btn-small" to='/addmedia'>Add Media</Link>
                </div>
                <div className="card-content">
                  <h1>{this.state.user.username}</h1>
                  <h4>Bio:</h4>
                  <p>{this.state.user.description}</p>
                  <h4>Instruments:</h4>
                  <p>{this.state.user.instruments}</p>
                  <h4>City:</h4>
                  <p>{this.state.user.city}</p>
                  <h4>Facebook:</h4>
                  <p>{this.state.user.facebook}</p>
                  <h4>Phone:</h4>
                  <p>{this.state.user.phone}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        }
        <div className="card-panel center">
          <h4 className="blue-text text-darken-3"><i className="material-icons">play_circle_filled</i> media</h4>
        </div>
       { !loading && this.state.user.media.map((media)=>{
          return <div class="row">
                      <div class="col s12 m12">
                        <div class="card">
                          <div class="card-image">
                            <ReactPlayer className="player" key={media._id}url={media.url} />
                            </div>
                            <div class="card-content">
                            <h4>{media.title}</h4>
                            <p>Year: {media.year}</p>
                          </div>
                      </div>
                    </div>
                  </div>

       })
       }

      </div>
    )
  }
}

export default withAuth(MyProfile);
