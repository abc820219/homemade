import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import { Homemade, Navigation, Login } from '@/routes/routes'
import store from '@/redux/store'
import {
  setMemberInfoAction
} from '@/redux/member_action'
class App extends Component {
  componentDidMount () {
    store.dispatch(setMemberInfoAction())
  }

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
