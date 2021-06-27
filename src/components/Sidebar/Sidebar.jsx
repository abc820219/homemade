import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Sidebar.scss'
import booking from '@/assets/images/sidebar-booking.png'
import course from '@/assets/images/sidebar-course.png'
import teacher from '@/assets/images/sidebar-teacher.png'
class Sidebar extends Component {
  render () {
    return (
      <div className="sidebar">
        <div className="sidebar-cover"></div>
        <Link className="active" to="/homemade/">
          <p>
            烘焙時光
          </p>
          <small>(關於我們)</small>
        </Link>
        <Link to="/homemade/booking">
          <p>
            玩樂烘焙
          </p>
          <small>(課程預約)</small>
          <img src={booking} alt="" />
        </Link>
        <Link to="/homemade/teacher">
          <p>
            異國薈萃
          </p>
          <small>(國際名師)</small>
          <img src={teacher} alt="" />
        </Link>
        <Link to="/homemade/course">
          <p>
            譜出滋味
          </p>
          <small>(推薦課程)</small>
          <img src={course} alt="" />
        </Link>
        <Link to="/homemade/member">
          <p>
            烘焙學員
          </p>
          <small>(會員管理)</small>
        </Link>
      </div >
    )
  }
}

export default Sidebar
