import React from 'react'
import {render} from 'react-dom'

class Login extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <form>
        <label>username:<br/>
          <input type="text" name="username" />
        </label>
        <label>password<br/>
        <input type="password" name="password" />
      </label>
      <input type="submit" value="Sign in" />
      </form>
    )
  }
}

export default Login
