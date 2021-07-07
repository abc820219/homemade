import React, { Component } from 'react'
import '@/assets/scss/login.scss'
import introSvg from '@/assets/images/LOGOLEFT.svg'
import { Link, withRouter } from 'react-router-dom'
import { apiInsertMember, apiLoginMember } from '@/modules/api'
import PropTypes from 'prop-types'
import store from '@/redux/store'
import {
  setMemberInfoAction
} from '@/redux/member_action'
import Alert from '@/components/Alert/Alert.jsx'
class Login extends Component {
  static propTypes = {
    history: PropTypes.object
  }

  state = {
    pageType: 'login'
  }

  loginHandler = () => {
    event.preventDefault()
    const emailReg = /^[^[\]()\\<>:;,@.]+[^[\]()\\<>:;,@]*@[a-z0-9A-Z]+(([.]?[a-z0-9A-Z]+)*[-]*)*[.]([a-z0-9A-Z]+[-]*)+$/g
    if (!emailReg.test(this.email.value)) {
      Alert.show('Email格式錯誤')
      return
    }
    if (!this.password.value) {
      Alert.show('資訊未填寫')
      return
    }
    apiLoginMember({
      email: this.email.value,
      password: this.password.value
    }).then(res => {
      const { status } = res.data
      if (status === 200) {
        store.dispatch(setMemberInfoAction())
        Alert.show('登入成功').then(() => {
          this.props.history.push('/homemade/member')
        })
        return
      }
      Alert.show('登入失敗')
    })
  }

  registerHandler = () => {
    event.preventDefault()
    const emailReg = /^[^[\]()\\<>:;,@.]+[^[\]()\\<>:;,@]*@[a-z0-9A-Z]+(([.]?[a-z0-9A-Z]+)*[-]*)*[.]([a-z0-9A-Z]+[-]*)+$/g
    if (!emailReg.test(this.email.value)) {
      Alert.show('Email格式錯誤')
    }
    if (!this.name.value || !this.password.value) {
      Alert.show('資訊未填寫')
    }
    apiInsertMember({
      email: this.email.value,
      name: this.name.value,
      password: this.password.value
    }).then(res => {
      const { status } = res.data
      if (status === 200) {
        Alert.show('註冊成功，請登入').then(() => {
          this.setState({ pageType: 'login' })
        })
      }
    })
  }

  changePageType = () => {
    const { pageType } = this.state
    if (pageType === 'login') {
      this.setState({ pageType: ' register' })
      return
    }
    this.setState({ pageType: 'login' })
  }

  render () {
    const { pageType } = this.state
    return (
      <div className="login">
        <div className="login-pic login-pic-right"></div>
        <div className="login-pic login-pic-left"></div>
        <div className="login-pic login-pic-left-top"></div>
        <div className="login-pic login-pic-right-bottom"></div>
        <form className="login-form">
          <div className="login_title">
            <img src={introSvg} />
            <span>
              {
                pageType === 'login' ? '會員登入' : '會員註冊'
              }
            </span>
            <Link to={'/homemade'}>
              <i className="fas fa-sign-in-alt" title="返回首頁"></i>
            </Link>
          </div>
          <div className="form-item">
            <label htmlFor=""><i className="far fa-envelope"></i> </label>
            <input type="text" ref={self => (this.email = self)} />
          </div>
          {
            pageType !== 'login' &&
            <div className="form-item">
              <label htmlFor=""><i className="fas fa-user"></i> </label>
              <input type="text" ref={self => (this.name = self)} />
            </div>
          }
          <div className="form-item">
            <label htmlFor=""><i className="fas fa-lock"></i> </label>
            <input type="password" ref={self => (this.password = self)} />
          </div>
          <div>
            {
              pageType === 'login' ? <input type="submit" className="btn" value="登入" onClick={this.loginHandler} /> : <input type="submit" className="btn" value="註冊" onClick={this.registerHandler} />

            }
          </div>
          <p>
            <span> 忘記密碼 </span>/<span onClick={this.changePageType}>{pageType === 'login' ? '註冊' : '登入'}
            </span>
          </p>
        </form>
      </div>
    )
  }
}

export default withRouter(Login)
