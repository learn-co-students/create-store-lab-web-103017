import React, { Component } from 'react';

class UserInput extends Component {

  constructor()
  {
    super()
    this.state={
      username:"",
      hometown:""
    }
  }

  // this.props.store.dispatch({
  //   type: 'ADD_USER',
  // });
  handleInput = (e) =>
  {
    switch(e.target.name)
    {
      case "hometown":
        this.setState({hometown: e.target.value})
        break;
      case "username":
        this.setState({username: e.target.value})
        break;
      default:
        return console.log("Nothing")
    }
  }
    dispatchSubmit = (e) =>
    {
      this.props.store.dispatch({
        type: 'ADD_USER',
        user: this.state
      });
    }


  render() {
    return(
      <div>
        <form onSubmit={this.dispatchSubmit}>
          <input type="text" name="hometown" onChange={this.handleInput} placeholder="hometown" />
          <input type="text" name="username" onChange={this.handleInput} placeholder="username" />
          <button>Submit</button>
        </form>
      </div>
    );
  }
};

export default UserInput;
