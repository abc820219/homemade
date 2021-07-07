import React, { Component } from 'react'
import '@/assets/scss/member.scss'
import Info from '@/pages/Info.jsx'
import { NavLink, Switch, Route } from 'react-router-dom'
import store from '@/redux/store'
class Member extends Component {
  render () {
    return (
      <div className="member">
        <div className="sidebar-cover"></div>
        <main>
          <div className="member-title">
            {store.getState().member_name ? `Hi,${store.getState().member_name}歡迎來到會員專區。` : '尚未登入'}
          </div>
          <div className="member-wrapper">
            <ul className="member-sidebar">
              <li>
                <NavLink to="/homemade/member/" exact>基本資訊</NavLink >
              </li>
              <li>我的預約</li>
              <li>我的最愛</li>
              <li>購物車</li>
            </ul>
            <div className="member-content">
              <Switch>
                <Route path="/homemade/member/" component={Info}></Route>
              </Switch>
            </div>
          </div>
        </main>
      </div>
    )
  }
}

export default Member
