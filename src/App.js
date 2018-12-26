import React, { Component } from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom'
// import { BrowserRouter, Switch, Route } from 'react-router-dom'
// import hashHistory from '/history/'

import Cover from './components/cover'
import HomePage from './components/home-page'

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route exact path="/" component={ HomePage } />
          <Route path="/home" component={ Cover } />
        </Switch>
      </HashRouter>
    )
  }
}

export default App
