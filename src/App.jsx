import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import { Homemade, Navigation, Login } from '@/routes/routes'
class App extends Component {
  render () {
    return (
      <>
        <Switch>
          <Route path="/homemade" component={() => <Homemade />}>
          </Route>
          <Route path="/login" component={() => <Login />}>
          </Route>
          <Route path="/" component={Navigation}>
          </Route>
        </Switch>
      </>
    )
  }
}

export default App
