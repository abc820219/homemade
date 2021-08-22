import React, { Component } from 'react'
import '@/assets/scss/home.scss'
import { Link } from 'react-router-dom'
import { apiGetTeachers } from '@/modules/api'

class Home extends Component {
  state = {
    teacherInfoArr: []
  }

  componentDidMount () {
    apiGetTeachers().then(res => {
      const { status } = res.data
      if (status === 200) {
        const { data } = res.data
        this.setState({
          teacherInfoArr: data
        })
      }
    })
  }

  render () {
    const { teacherInfoArr } = this.state
    return (
      <div className="home">
        <section className="home-banner">
          <div className="home-banner-content">
            適合男女老少的Homemade手作烘焙教室,為您打造獨一無二的烘焙教學課程。
            <button className="btn btn-primary">
              <Link to="/homemade/booking">
                前往預約
              </Link>
            </button>
          </div>
        </section>
        <section className="home-course">
          <h5>
            熱門系列
          </h5>
          <div className="content">
              <ul >
                <li>
                  <p>
                    <span className="en-font">mille crepe</span>
                    <br />
                    <small>絕品千層課程</small>
                  </p>
                  <img src={require('@/assets/images/黑白配千層s.png').default} alt="" />
                </li>
                <li>
                  <p>
                    <span className="en-font">CAKES</span>
                    <br />
                    <small>經典蛋糕課程</small>
                  </p>
                  <img src={require('@/assets/images/蘭姆葡萄乳酪蛋糕s.png').default} alt="" />
                </li>
                <li>
                  <p>
                    <span className="en-font">TartS</span>
                    <br />
                    <small>華麗甜點塔課程</small>
                  </p>
                  <img src={require('@/assets/images/法式經典檸檬塔s.png').default} alt="" />
                </li>
                <li>
                  <p>
                    <span className="en-font">PUFFS</span>
                    <br />
                    <small>美味泡芙課程</small>
                  </p>
                  <img src={require('@/assets/images/髒髒泡芙s.png').default} alt="" />
                </li>
              </ul>
          </div>
        </section>
        <section className="home-teacher">
          <h5>
            明星師資
          </h5>
          <div className="content">
            <ul >
              {
                teacherInfoArr.map((info, i) => {
                  return (
                    <li key={info.teacher_name}>
                      <img src={require(`@/assets/images/${info.teacher_small_img}`).default} alt="" />
                      <ul className="teacher-content">
                        <li className="teacher-details-name">
                          老師 : {info.teacher_name}
                        </li>
                        <li>
                          老師專長 :
                          {info.teacher_skill}
                        </li>
                      </ul>
                    </li>
                  )
                })
              }
            </ul>
          </div>
        </section>
        <section className="home-info">
          <div>
            <label htmlFor="">
              <input type="text" placeholder="輸入您的email" />
              <button className="btn btm-primary">聯絡我們</button>
            </label>
            <i className="fab fa-facebook"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-twitter"></i>
          </div>
          <div>
            Copyright © 2021 homemade. All rights reserved.
          </div>
          <ul>
            <li>營業時間:週一至週五下午14:00 ~ 21:00</li>
            <li>電話:02-22789696</li>
            <li>郵件:homemade@gmail.com</li>
          </ul>
        </section>
      </div>
    )
  }
}

export default Home
