import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './Sidebar.scss'
import booking from '@/assets/images/sidebar-booking.png'
import course from '@/assets/images/sidebar-course.png'
import teacher from '@/assets/images/sidebar-teacher.png'
import store from '@/redux/store'
import PropTypes from 'prop-types'
class Sidebar extends Component {
  static propTypes = {
    sidebarIsOpen: PropTypes.bool,
    sidebarHandler: PropTypes.func
  }

  render () {
    const { sidebarIsOpen, sidebarHandler } = this.props
    return (
      <div className={sidebarIsOpen ? 'sidebar open' : 'sidebar'}>
        <i className="far fa-times-circle" onClick={() => sidebarHandler(false)}></i>
        <div className="sidebar-cover"></div>
        <NavLink to="/homemade/" exact>
          <p>
            烘焙時光
          </p>
          <small>(關於我們)</small>
        </NavLink >
        <NavLink to="/homemade/booking">
          <p>
            玩樂烘焙
          </p>
          <small>(課程預約)</small>
          <img src={booking} alt="" />
        </NavLink >
        <NavLink to="/homemade/teacher">
          <p>
            異國薈萃
          </p>
          <small>(國際名師)</small>
          <img src={teacher} alt="" />
        </NavLink >
        <NavLink to="/homemade/course">
          <p>
            譜出滋味
          </p>
          <small>(推薦課程)</small>
          <img src={course} alt="" />
        </NavLink >
        {
          store.getState().member_sid && <NavLink to="/homemade/member">
            <p>
              烘焙學員
            </p>
            <small>(會員管理)</small>
          </NavLink >

        }

      </div >
    )
  }
}

export default Sidebar
