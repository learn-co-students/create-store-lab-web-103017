import React, { Component } from 'react';

class UserInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      hometown: ''
    }
  }

  handleSubmit() {
    this.props.store.dispatch({
      type: 'ADD_USER',
      user: {
        username: this.state.username,
        hometown: this.state.hometown
      }
    });
    this.setState({
      username: '',
      hometown: ''
    });
  }

  handleUsernameChange(event) {
    this.setState({
      username: event.target.value,
    });
  }

  handleHometownChange(event) {
    this.setState({
      hometown: event.target.value,
    });
  }

  render() {
    return(
      <div>
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <input type="text" onChange={(event) => this.handleUsernameChange(event)} value={this.state.username}/>
          <input type="text" onChange={(event) => this.handleHometownChange(event)} value={this.state.hometown}/>
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default UserInput;
