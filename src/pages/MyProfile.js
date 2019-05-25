import React, { Component } from 'react'
import {withAuth} from './../lib/AuthProvider';

class MyProfile extends Component {

  componentDidMount(){
    console.log(this.props.user)

  }
  render() {
    return (
      <div>
       <h1>{this.props.user.username}</h1>
       <p>{this.props.user.description}</p>
      </div>
    )
  }
}

export default withAuth(MyProfile);
