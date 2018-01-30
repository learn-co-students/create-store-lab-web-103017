import React, { Component } from 'react';

class UserInput extends Component {
  constructor(){
    super()
    this.state={
      username: '',
      hometown: ''
    }
  }

  handleChange = (e) => {
    e.preventDefault();
    this.props.store.dispatch({type:"ADD_USER", user: {username: this.state.username, hometown: this.state.hometown}})
  }

  handleUserChange = (e) =>{
    this.setState({username: e.target.value})
  }
  handleTownChange = (e) =>{
    this.setState({hometown: e.target.value})
  }

  render() {
    console.log("in form", this.state);
    return(
      <div>
        <form onSubmit={this.handleChange}>
          <input type="text" placeholder="username" name="username" value={this.state.username} onChange={this.handleUserChange}/>
          <input type="text" placeholder="hometown" name="hometown" value={this.state.hometown} onChange={this.handleTownChange}/>
          <input type="submit"/>
        </form>
      </div>
    );
  }
};

export default UserInput;
