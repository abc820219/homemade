import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import { Course, Teacher, Booking, HomemadeHome, Member } from '@/routes/routes'
import Header from '@/components/Header/Header.jsx'
import Sidebar from '@/components/Sidebar/Sidebar.jsx'
import '@/assets/scss/homeMade.scss'
class Homemade extends Component {
  render () {
    return (
      <div className="homeMade">
        <Sidebar />
        <main>
          <Header />
          <Switch>
            <Route path="/homemade/course" component={Course}></Route>
            <Route path="/homemade/teacher" component={Teacher}></Route>
            <Route path="/homemade/booking" component={Booking}></Route>
            <Route path="/homemade/member" component={Member}></Route>
            <Route path="/homemade/" component={HomemadeHome}></Route>
          </Switch>
        </main>
      </div>
    )
  }
}

export default Homemade
