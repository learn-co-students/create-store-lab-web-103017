import React, { Component } from 'react';

class UserInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      hometown: ''
    }
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.store.dispatch({
      type: 'ADD_USER',
      user: {
        username: this.state.username,
        hometown: this.state.hometown
      }
    })
    this.setState({
      username: '',
      hometown: ''
    })
  }

  render() {
    return(
      <div className="manage-users">
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="username" placeholder="username" onChange={this.handleChange} />
          <input type="text" name="hometown" placeholder="hometown" onChange={this.handleChange} />
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default UserInput;
