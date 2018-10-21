import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import App from './App'

class Root extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" component={App} />
      </Switch>
    )
  }
}

export default Root
