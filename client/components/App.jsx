import React from 'react'
import {HashRouter as Router, Route, Link} from 'react-router-dom'

import Login from './Login'

class App extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return(
      <div>
        <h1>Welcome to the authenticator</h1>
        <Login />
      </div>
    )
  }
}

export default App
