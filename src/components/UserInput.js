import React, { Component } from "react"

class UserInput extends Component {
  constructor(props) {
    super()
    this.state = {
      username: "",
      hometown: ""
    }
  }
  handleSubmit = event => {
    this.props.store.dispatch({
      type: "ADD _USER",
      user: { username: this.state.username, hometown: this.state.hometown }
    })
    this.setState({ username: "", hometown: "" })
  }
  handleChange = event => {
    this.setState({ username: event.target.value })
  }

  handleHome = event => {
    this.setState({ hometown: event.target.value })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} value={this.state.username} />
          <input onChange={this.handleHome} value={this.state.hometown} />
          <input type="submit" />
        </form>
      </div>
    )
  }
}

export default UserInput
