import React from "react"
import ReactDOM from "react-dom"
import { createStore } from "redux"
import manageUsers from "./reducers/manageUsers"
import App from "./App"
import Provider from "redux"

// we wrap store in a function for testing purposes
export function configureStore() {
  return createStore(
    manageUsers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
}

ReactDOM.render(
  <App store={configureStore()} />,
  document.getElementById("root")
)
