import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Header.scss'
class Header extends Component {
  render () {
    return (
      <header className="header">
        <div className="header-menu">
          <h1 className="logo en-font">
            HomeMade
          </h1>
        </div>
        <ul>
          <li className='en-font'>
            <Link to="/login">
              login
            </Link>
          </li>
          {/* <i className="far fa-user-circle"></i> */}
          <li><i className="fas fa-shopping-cart"></i> </li>
        </ul>
      </header>
    )
  }
}

export default Header
