import React, { Component } from 'react'
import '@/assets/scss/member.scss'
class Member extends Component {
  render () {
    return (
      <div className="member">
        <div className="sidebar-cover"></div>
        <main>
          <div className="member-title">
            Hi,XXX歡迎來到會員專區。
          </div>
          <div className="member-wrapper">
            <ul className="member-sidebar">
              <li>基本資訊</li>
              <li>帳號設定</li>
              <li>購買訂單</li>
              <li>我的最愛</li>
              <li>購物車</li>
            </ul>
            <div className="member-content">
              123
            </div>
          </div>
        </main>
      </div>
    )
  }
}

export default Member
