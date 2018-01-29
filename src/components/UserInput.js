import React, { Component } from 'react';

class UserInput extends Component {

  constructor(props) {
    super(props)

    this.state = {
      username: '',
      hometown: '',
    }
  }


  handleUsernameChange = event => {
    console.log('handlingChange', event.target.value);
    console.log('handlingChangeId', event.target.id);
    this.setState({
      username: event.target.value
    })
  }

  handleHometownChange = event => {
    console.log('handlingChange', event.target.value);
    console.log('handlingChangeId', event.target.id);
    this.setState({
      hometown: event.target.value
    })
  }

  handleOnSubmit = event => {
    event.preventDefault()
    console.log('handlingSubmit');
    this.props.store.dispatch({
      type: 'ADD_USER',
      user: this.state,
    })
  }

  render() {

    return(
      <div>
        <form onSubmit={((event) => this.handleOnSubmit(event))} >
          <label>Username:</label>
          <input type="text" id="username" onChange={(event) => this.handleUsernameChange(event)} ></input>
          <label>Hometown:</label>
          <input type="text" id="hometown" onChange={((event) => this.handleHometownChange(event))} ></input>
          <input type="submit"></input>
        </form>
      </div>
    );
  }
};

export default UserInput;
