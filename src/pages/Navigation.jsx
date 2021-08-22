import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import introSvg from '@/assets/images/LOGOLEFT.svg'
class Navigation extends Component {
  render () {
    return (
      <div className="navigation_container">
        <Link className="cake_container" to="/homemade/home" tag="h1">
          <div className="cake_title">
            <h1 className="logo" >
              <img src={introSvg} />
              <div className="separator"></div>
              <span className="right_logo">
                <p>HomeMade</p>
              </span>
            </h1>
          </div>
          <div className="cake">
            <div className="top">
              <div className="cherry">
                <svg className="head" width="100px" viewBox="-60 -60 100 100">
                  <path d="M0 0 q 8 8 18 -4" />
                  <path d="M9 0 q -10 -40 16 -50" />
                </svg>
              </div>
            </div>
            <div className="middle">
              <div className="berry"></div>
              <div className="berry"></div>
              <div className="berry"></div>
              <div className="berry"></div>
              <div className="berry"></div>
              <div className="berry"></div>
              <div className="berry"></div>
            </div>
            <div className="bottom">
              <div className="bottom1"></div>
              <div className="bottom2"></div>
              <div className="bottom1"></div>
              <div className="bottom3"></div>
              <div className="bottom2"></div>
            </div>
            <div className="dish"></div>
          </div>
        </Link>

      </div>
    )
  }
}

export default Navigation
