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
    console.log('ADD MEDIA FORM', this.state, this.props.user)
    const { type, url, title, description, year, month } = this.state;
    const { id } = this.props.match.params;

    media.addMedia(type, url, title, description, year, month, id)
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
        <Link to='/profile'><button >My Profile</button></Link>
        <Link to='/edit'><button >Edit Profile</button></Link>
        <Link to='/favorites'><button>Favorites</button></Link>
        <h3>Add Media</h3>
        <form onSubmit={this.handleFormSubmit}>

          <label>Title:</label>
          <input
            type="text"
            name="title"
            placeholder="title"
            value={this.title}
            onChange={this.handleChange}
          />

          <label>Type(song or video):</label>
          <input
            type="text"
            name="type"
            placeholder="type"
            value={this.type}
            onChange={this.handleChange}
          />

          <label>URL:</label>
          <input
            type="text"
            name="url"
            placeholder="url"
            value={this.url}
            onChange={this.handleChange}
          />

          <label>Description:</label>
          <input
            type="text"
            name="description"
            placeholder="description"
            value={this.description}
            onChange={this.handleChange}
          />

          <label>Year:</label>
          <input
            type="text"
            name="year"
            placeholder="year"
            value={this.year}
            onChange={this.handleChange}
          />

          <input type="submit" value="Send" />
        </form>
      </div>
    )
  }
}



export default withAuth(AddMedia);
