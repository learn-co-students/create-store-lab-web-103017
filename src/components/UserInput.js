import React, { Component } from 'react';

class UserInput extends Component {
  constructor() {
    super()

    this.state = {
      username: '',
      hometown: ''
    }
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    }, () => console.log(this.state))
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.store.dispatch({
      type: "ADD_USER",
      user: this.state
    })
  }
  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="username"
            placeholder="username"
            value={this.state.username}
            onChange={this.handleChange}/>
          <br></br>
          <input
            type="text"
            name="hometown"
            placeholder="hometown"
            value={this.state.hometown}
            onChange={this.handleChange}/>
          <br></br>
          <input type="submit"/>
        </form>
      </div>
    );
  }
};

export default UserInput;
