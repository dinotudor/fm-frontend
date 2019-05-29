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
    .then(()=>{
    this.setState({
      type: '',
      url: '',
      title: '',
      description: '',
      year: '',
      month: ''
    })

    this.props.history.push('/profile');
  }
    )
}

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };


  render() {
    return (
      <div>
      <div className="card-panel center">
        <h4 className="blue-text text-darken-2">add media</h4>
      </div>
        <form className="form-edit" onSubmit={this.handleFormSubmit}>

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

          <button className="btn waves-effect waves-light material-icons" type="submit" value="Send">send</button>
        </form>
      </div>
    )
  }
}



export default withAuth(AddMedia);
