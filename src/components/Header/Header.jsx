import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import store from '@/redux/store'
import './Header.scss'
import { apiLogoutMember } from '@/modules/api'
import {
  setMember
} from '@/redux/member_action'
import PropTypes from 'prop-types'
class Header extends Component {
  static propTypes = {
    history: PropTypes.object,
    sidebarHandler: PropTypes.func
  }

  logoutHandler = () => {
    apiLogoutMember().then((res) => {
      const { status } = res.data
      if (status === 200) {
        store.dispatch(setMember({}))
        this.props.history.push('/homemade')
      }
    })
  }

  render () {
    const { sidebarHandler } = this.props
    return (
      <header className="header">
        <i className="fas fa-bars" onClick={() => sidebarHandler(true)}></i>
        <div className="header-menu">
          <h1 className="logo en-font">
            HomeMade
          </h1>
        </div>
        <ul>
          <li className='en-font'>
            {store.getState().member_sid
              ? <p className="header-logout" onClick={this.logoutHandler}>
                logout
              </p>
              : <Link to="/login">
                login
              </Link>}
          </li>
          {store.getState().member_sid && <li> <Link className="far fa-user-circle" to="/homemade/member"></Link></li>}
          <li><i className="fas fa-shopping-cart"></i> </li>
        </ul>
      </header>
    )
  }
}

export default withRouter(Header)
