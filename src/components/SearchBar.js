import React, { Component } from 'react'

export class SearchBar extends Component {
  state = {
    query: ""
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value})
    this.props.filterUserProfiles(value)
  }

  render() {
    return (
      <div>
        <form className="form-edit">
          <label className="left"><i className="material-icons big">search</i></label>
          <input className="text-input left" placeholder="search"  onChange={this.handleChange} name="query"
            value={this.state.query}
          />
        </form>
      </div>
    )
  }
}

export default SearchBar
