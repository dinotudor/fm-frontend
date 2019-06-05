import React, { Component } from 'react';
import { withAuth } from './../lib/AuthProvider';
import profile from './../lib/profile-service';

class EditProfile extends Component {
  state = {
    username: '',
    description: '',
    instruments: '',
    genres: '',
    city: '',
    facebook:'',
    phone:'',
    email: '',
    image: '',
    disable: true
  }

  handleFormSubmit = (e) => {
    console.log('LOG', this.state, this.props.user)
    e.preventDefault();

    profile.editOne(this.state)
      .then(()=>{
        this.setState({
          username: '',
          description: '',
          instruments: '',
          genres: '',
          city: '',
          facebook:'',
          phone:'',
          email: '',
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
      },()=>{console.log(this.state.image)})
    })
    .catch((error) => console.log(error))
  }

  componentDidMount() {
    profile.getOne(this.props.user._id)
      .then((data) =>{
        const { username, description, instruments, genres, city, facebook, phone, email, image  } = data;
        this.setState({ username, description, instruments, genres, city, facebook, phone, email, image})
      })
  }


  render() {
    console.log('STATE',this.state);
    const { disable } = this.state;
    return (
      <div>
      <div className="card-panel center">
        <h4 className="blue-text text-darken-2">edit profile</h4>
      </div>
        <form className="form-edit" onSubmit={this.handleFormSubmit}>
          <label>Username:</label>
            <input
              className="input-field col s6"
              type="text"
              name="username"
              placeholder="user name"
              value={this.state.username}
              onChange={this.handleChange}
            />

            <label>BIO:</label>
            <input
              type="text"
              name="description"
              placeholder="description"
              value={this.state.description}
              onChange={this.handleChange}
            />

            <label>Instruments:</label>
            <input
              type="text"
              name="instruments"
              placeholder="instruments"
              value={this.state.instruments}
              onChange={this.handleChange}
            />

            <label>Genres:</label>
            <input
              type="text"
              name="genres"
              placeholder="genres"
              value={this.state.genres}
              onChange={this.handleChange}
            />

            <label>City:</label>
            <input
              type="text"
              name="city"
              placeholder="city"
              value={this.state.city}
              onChange={this.handleChange}
            />

            <label>Facebook page:</label>
            <input
              type="text"
              name="facebook"
              placeholder="facebook page"
              value={this.state.facebook}
              onChange={this.handleChange}
            />

            <label>Phone:</label>
            <input
              type="text"
              name="phone"
              placeholder="phone"
              value={this.state.phone}
              onChange={this.handleChange}
            />

            <label>Email:</label>
            <input
              type="text"
              name="email"
              placeholder="email"
              value={this.state.email}
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
