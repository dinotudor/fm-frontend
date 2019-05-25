import React, { Component } from 'react';
import {withAuth} from './../lib/AuthProvider';

class EditProfile extends Component {
  state = {
    username: '',
    description: '',
    instruments: '',
    genres: ''
  }
  handleChange = (e) => {
    this.setState({
      username: e.target.value,
      description: e.target.value,
      instruments: e.target.value,
      genres: e.target.value,
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state);
    this.setState({
      username: '',
      description: '',
      instruments: '',
      genres: ''
    })
  }

  render() {
    return (
      <div>
        <form>
          <label>User Name:</label>
          <input type="text" onChange={this.handleChange} value={this.state.username} />

          <label>BIO:</label>
          <input type="text" onChange={this.handleChange} value={this.state.description} />

          <label>Instruments:</label>
          <input type="text" onChange={this.handleChange} value={this.state.instruments} />

          <label>Genres:</label>
          <input type="text" onChange={this.handleChange} value={this.state.genres} />

        </form>
      </div>
    )
  }
}

export default withAuth(EditProfile);
