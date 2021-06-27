import React, { Component } from 'react'
import '@/assets/scss/login.scss'
import introSvg from '@/assets/images/LOGOLEFT.svg'
import { Link } from 'react-router-dom'
class Login extends Component {
  render () {
    return (
      <div className="login">
        <div className="login-pic login-pic-right"></div>
        <div className="login-pic login-pic-left"></div>
        <div className="login-pic login-pic-left-top"></div>
        <div className="login-pic login-pic-right-bottom"></div>
        <form action="" className="login-form">
          <div className="login_title">
            <img src={introSvg} />
            <span>
              會員登入
            </span>
            <Link to={'/homemade'}>
              <i className="fas fa-sign-in-alt" title="返回首頁"></i>
            </Link>
          </div>
          <div className="form-item">
            <label htmlFor=""><i className="far fa-envelope"></i> </label>
            <input type="text" />
          </div>
          <div className="form-item">
            <label htmlFor=""><i className="fas fa-lock"></i> </label>
            <input type="text" />
          </div>
          <div>
            <input type="submit" className="btn" value="登入" />
          </div>
          <p>
            <span>
              忘記密碼
            </span>
            /
            <span>
              註冊
            </span>
          </p>
        </form>
      </div>
    )
  }
}

export default Login
