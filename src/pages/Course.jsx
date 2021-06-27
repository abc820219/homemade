import React, { Component } from 'react'
import '@/assets/scss/course.scss'
import course from '@/assets/images/歐培拉s.png'
import cakes from '@/assets/images/蘭姆葡萄乳酪蛋糕s.png'
import puffs from '@/assets/images/髒髒泡芙s.png'
import tarts from '@/assets/images/法式經典檸檬塔s.png'
class Course extends Component {
  render () {
    return (
      <div className="course">
        <ul className="course-filter">
          <li className="active">
            <p>
              <span className="en-font">
                ALL
              </span>
              <br />
              <small>全部課程</small>
            </p>
            <img src={course} alt="" />
          </li>
          <li>
            <p>
              <span className="en-font">
                CAKES  </span><br />
              <small>經典蛋糕課程</small>
            </p>
            <img src={cakes} alt="" />
          </li>
          <li>
            <p><span className="en-font">
              PUFFS </span><br />
              <small>美味泡芙課程</small>
            </p>
            <img src={puffs} alt="" />
          </li>
          <li >
            <p><span className="en-font">
              TartS</span><br />
              <small>華麗甜點塔課程</small>
            </p>
            <img src={tarts} alt="" />
          </li>
        </ul>
        <div className="course-info">
          <div className="course-info-content">
            <div>
              提供各式各樣的經典烘焙課程。
            </div>
          </div>
        </div>
        <div className="course-group">
          <ul className="course-group-filter">
            <li className="active">
              全部課程
             </li>
            <li>經典蛋糕</li>
            <li>美味泡芙</li>
            <li>華麗甜點塔</li>
          </ul>
          <ul className="course-items">
            <li>
              <img src={require('@/assets/images/蘭姆葡萄乳酪蛋糕s.png').default} alt="" />
            </li>

            <li>
              <img src={require('@/assets/images/蘭姆葡萄乳酪蛋糕s.png').default} alt="" />
            </li>

            <li>
              <img src={require('@/assets/images/蘭姆葡萄乳酪蛋糕s.png').default} alt="" />
            </li>

            <li>
              <img src={require('@/assets/images/蘭姆葡萄乳酪蛋糕s.png').default} alt="" />
            </li>

            <li>
              <img src={require('@/assets/images/蘭姆葡萄乳酪蛋糕s.png').default} alt="" />
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Course
