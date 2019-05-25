import React, { Component } from 'react';
import { withAuth } from './../lib/AuthProvider';
import { Link } from 'react-router-dom';
import profile from './../lib/profile-service';

class EditProfile extends Component {
  state = {
    username: '',
    description: '',
    instruments: '',
    genres: ''
  }

  handleFormSubmit = (e) => {
    console.log('LOG', this.state, this.props.user)
    e.preventDefault();
    const { username, description, instruments, genres } = this.state;
    const { id } = this.props.match.params;

    profile.editOne({ username, description, instruments, genres, id})
    this.setState({
      username: '',
      description: '',
      instruments: '',
      genres: ''
    })
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };


  render() {
    return (
      <div>

          <form onSubmit={this.handleFormSubmit}>
                <label>user Name:</label>
                    <input
                    type="text"
                    name="username"
                    value={this.username}
                    onChange={this.handleChange}
                    />

                    <label>BIO:</label>
                    <input
                    type="text"
                    name="description"
                    value={this.description}
                    onChange={this.handleChange}
                    />

                    <label>Instruments:</label>
                    <input
                    type="text"
                    name="instruments"
                    value={this.instruments}
                    onChange={this.handleChange}
                    />

                    <label>City:</label>
                    <input
                    type="text"
                    name="genres"
                    value={this.genres}
                    onChange={this.handleChange}
                    />


                <input type="submit" value="Send" />
          </form>
        <Link to='/dashboard'><button >back</button></Link>
      </div>
    )
  }
}

export default withAuth(EditProfile);
