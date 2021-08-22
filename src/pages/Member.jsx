import React, { Component } from 'react'
import '@/assets/scss/member.scss'
import Info from '@/pages/Info.jsx'
import LikeTeacher from '@/pages/LikeTeacher.jsx'
import LikeCourse from '@/pages/LikeCourse.jsx'
import MyBooked from '@/pages/MyBooked.jsx'
import { NavLink, Switch, Route } from 'react-router-dom'
import store from '@/redux/store'
import {
  setMemberInfoAction
} from '@/redux/member_action'
let unsubscribe = null
class Member extends Component {
  componentDidMount () {
    store.dispatch(setMemberInfoAction())
    unsubscribe = store.subscribe(() => {
      this.setState({})
    })
  }

  componentWillUnmount () {
    unsubscribe()
  }

  render () {
    const { userInfo } = store.getState()
    return (
      <div className="member">
        <div className="sidebar-cover"></div>
        <main>
          <div className="member-title">
            {userInfo && userInfo.member_name ? `Hi,${userInfo && userInfo.member_name}歡迎來到會員專區。` : '尚未登入'}
          </div>
          <div className="member-wrapper">
            <ul className="member-sidebar">
              <li>
                <NavLink to="/homemade/member/" exact>基本資訊</NavLink >
              </li>
              <li> <NavLink to="/homemade/member/myBooked" exact>我的預約</NavLink ></li>
              <li> <NavLink to="/homemade/member/likeTeacher" exact>老師收藏</NavLink ></li>
              <li> <NavLink to="/homemade/member/likeCourse" exact>課程收藏</NavLink ></li>
            </ul>
            <div className="member-content">
              <Switch>
                <Route path="/homemade/member/likeTeacher" component={LikeTeacher}></Route>
                <Route path="/homemade/member/likeCourse" component={LikeCourse}></Route>
                <Route path="/homemade/member/myBooked" component={MyBooked}></Route>
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
