import React, { Component } from 'react';

class UserInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      hometown: ''
    }
  }
  handleChange = (e) => {
    e.target.name === 'username' ?
    this.setState({
      username: e.target.value
    }) : this.setState({
      hometown: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.store.dispatch({
      type: 'ADD_USER',
      user: {
        username: this.state.username,
        hometown: this.state.hometown
      }
    })

  }

  render() {
    // console.log(this.props.store.getState());
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type='text' name='username' onChange={this.handleChange}/>
          <input type='text' name='hometown' onChange={this.handleChange}/>
          <input type='submit'/>
        </form>
      </div>
    );
  }
};

export default UserInput;
