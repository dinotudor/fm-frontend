import React, { Component } from 'react';
import { withAuth } from './../lib/AuthProvider';
import { Link } from 'react-router-dom';
import profile from './../lib/profile-service';

class EditProfile extends Component {
  state = {
    username: '',
    description: '',
    instruments: '',
    genres: '',
    city: '',
    image: '',
    disable: true
  }

  handleFormSubmit = (e) => {
    console.log('LOG', this.state, this.props.user)
    e.preventDefault();
    const { username, description, instruments, genres, image, city } = this.state;

    profile.editOne(username, description, instruments, genres, city, image)
      .then(()=>{
        this.setState({
          username: '',
          description: '',
          instruments: '',
          genres: '',
          city: '',
          image: ''
        })

        this.props.history.push('/profile');

      }
        )

  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  fileOnchange = (event) => {
    const file = event.target.files[0];
    const uploadData = new FormData()
    uploadData.append('photo', file)

    profile.imageUpload(uploadData)
    .then((image) => {
      this.setState({
        image,
        disable: false,
      })
    })
    .catch((error) => console.log(error))
  }

  componentDidMount() {
    profile.getOne(this.props.user._id)
      .then((data) =>{
        const { username, city, description, instruments, genres, image} = data;
        this.setState({ username, city, description, instruments, genres, image})
      })
  }


  render() {
    console.log(this.state);
    const { disable } = this.state;
    return (
      <div>
        <h3>Edit Profile</h3>
        <form onSubmit={this.handleFormSubmit}>
          <label>User Name:</label>
            <input
              type="text"
              name="username"
              placeholder="username"
              value={this.username}
              onChange={this.handleChange}
            />

            <label>BIO:</label>
            <input
              type="text"
              name="description"
              placeholder="description"
              value={this.description}
              onChange={this.handleChange}
            />

            <label>Instruments:</label>
            <input
              type="text"
              name="instruments"
              placeholder="instruments"
              value={this.instruments}
              onChange={this.handleChange}
            />

            <label>City:</label>
            <input
              type="text"
              name="city"
              placeholder="city"
              value={this.city}
              onChange={this.handleChange}
            />

            <label>Genres:</label>
            <input
              type="text"
              name="genres"
              placeholder="genres"
              value={this.genres}
              onChange={this.handleChange}
            />

            <label>Picture:</label>
            <input
              type="file"
              onChange={this.fileOnchange}
            />

            <button className="btn waves-effect waves-light material-icons" type="submit" value="Send" disabled={disable}>send</button>
        </form>

      </div>
    )
  }
}

export default withAuth(EditProfile);
