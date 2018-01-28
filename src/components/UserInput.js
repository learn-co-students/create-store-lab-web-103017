import React, { Component } from 'react';

class UserInput extends Component {
  constructor(props){
    super(props)
    this.state ={
      username: '',
      hometown: ''
    }
  }

  handleSubmit = () => {
    this.props.store.dispatch({
      type: 'ADD_USER',
      user: {
        username: this.state.username,
        hometown: this.state.hometown
      }
    })
  }

  changeHometown = (e) => {
    this.setState({
      hometown: e.target.value
    })
  }

  changeUsername = (e) => {
    this.setState({
      username: e.target.value
    })
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.changeUsername} />
          <input type="text" onChange={this.changeHometown} />
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default UserInput;
