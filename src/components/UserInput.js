import React, { Component } from 'react';

class UserInput extends Component {

  constructor(){
    super()
    this.state = {
      username: "",
      hometown: ""
    }
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.store.dispatch({type: "ADD_USER", user: {username: this.state.username, hometown: this.state.hometown} })
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
        <p>user name</p>
        <input type="text" value={this.state.username} onChange={this.handleChange} name="username"/>
        <p>hometown</p>
        <input type="text" value={this.state.hometown} onChange={this.handleChange} name="hometown"/>
        <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
};

export default UserInput;
