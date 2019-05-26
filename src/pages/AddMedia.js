import React, { Component } from 'react';
import { withAuth } from './../lib/AuthProvider';
import { Link } from 'react-router-dom';
import media from './../lib/media-service';

class AddMedia extends Component {
  state = {
    type: '',
    url: '',
    title: '',
    description: '',
    year: '',
    month: ''
  }

  handleFormSubmit = (e) => {
    e.preventDefault();
    const { type, url, title, description, year } = this.state;
    const { id } = this.props.match.params;

    media.addMedia({ type, url, title, description, year })
    this.setState({
      type: '',
      url: '',
      title: '',
      description: '',
      year: '',
      month: ''
    })

  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };


  render() {
    return (
      <div>
        <Link to='/dashboard'><button >Home</button></Link>
        <Link to='/profile'><button >My Profile</button></Link>
        <form onSubmit={this.handleFormSubmit}>

          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={this.title}
            onChange={this.handleChange}
          />

          <input type="submit" value="Send" />
        </form>
      </div>
    )
  }
}



export default withAuth(AddMedia);
