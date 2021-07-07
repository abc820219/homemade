import React, { Component } from 'react'
import '@/assets/scss/course.scss'
import course from '@/assets/images/歐培拉s.png'
import cakes from '@/assets/images/蘭姆葡萄乳酪蛋糕s.png'
import puffs from '@/assets/images/髒髒泡芙s.png'
import tarts from '@/assets/images/法式經典檸檬塔s.png'
import { Link } from 'react-router-dom'
import { apiGetCourse } from '@/modules/api'
import { CSSTransitionGroup } from 'react-transition-group'
import DetailCard from '@/components/Course/DetailCard'
class Course extends Component {
  state = {
    courseList: [],
    filterKeys: {
      All: 0,
      千層: 1,
      蛋糕: 2,
      塔: 3,
      泡芙: 4
    },
    info: '提供各式各樣的經典烘焙課程。',
    currentKey: 'All',
    courseDetail: {
      open: false,
      detail: null
    }
  }

  componentDidMount () {
    apiGetCourse().then(res => {
      const { status } = res.data
      if (status === 200) {
        this.setState({ courseList: res.data.data })
      }
    }).catch(err => {
      console.log(err)
    })
  }

  detailCardHandler = (course) => {
    this.setState({
      courseDetail: {
        open: true,
        detail: course
      }
    })
  }

  closeDetailCardHandler = () => {
    this.setState({
      courseDetail: {
        open: false,
        detail: null
      }
    })
  }

  changeKeyHandler = (key, e) => {
    const infoList = document.querySelectorAll('.course-group-filter li')
    infoList.forEach(dom => {
      dom.classList.remove('active')
    })
    const sidBarList = document.querySelectorAll('.course-filter li')
    sidBarList.forEach(dom => {
      dom.classList.remove('active')
    })
    if (key !== 'All') {
      infoList[this.state.filterKeys[key]].classList.add('active')
      sidBarList[this.state.filterKeys[key] - 1].classList.add('active')
    } else {
      sidBarList[0].classList.add('active')
    }
    this.setState({ currentKey: key })
  }

  render () {
    let { courseList, currentKey, info, courseDetail } = this.state
    if (currentKey !== 'All') {
      courseList = courseList.filter(course => {
        return course.course_kid === currentKey
      })
    }
    switch (currentKey) {
      case 'All':
        info = '提供各式各樣的經典烘焙課程。'
        break
      case '千層':
        info = '人氣推薦:金沙起士千層課程，抹茶千層課程。'
        break
      case '蛋糕':
        info = '人氣推薦:烏龍鐵觀音乳酪蛋糕,蘭姆葡萄乳酪蛋糕。'
        break
      case '塔':
        info = '人氣推薦:草莓花圈塔。'
        break
      case '泡芙':
        info = '人氣推薦:莓果布雷斯特泡芙。'
        break
    }
    return (
      <div className="course">
        <CSSTransitionGroup
          transitionName="fade"
          transitionEnter={true}
          transitionLeave={true}
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}
          component='div'
        >
          {
            (courseDetail.open && courseDetail.detail) && <DetailCard courseDetail={courseDetail} closeDetailCardHandler={this.closeDetailCardHandler}></DetailCard>
          }
        </CSSTransitionGroup>
        <ul className="course-filter">
          <li onClick={(e) => this.changeKeyHandler('千層', e)}>
            <p>
              <span className="en-font">
                mille crepe
              </span>
              <br />
              <small>絕品千層課程</small>
            </p>
            <img src={course} alt="" />
          </li>
          <li onClick={(e) => this.changeKeyHandler('蛋糕', e)}>
            <p>
              <span className="en-font active" >
                CAKES  </span><br />
              <small>經典蛋糕課程</small>
            </p>
            <img src={cakes} alt="" />
          </li>
          <li onClick={(e) => this.changeKeyHandler('塔', e)}>
            <p><span className="en-font">
              TartS</span><br />
              <small>華麗甜點塔課程</small>
            </p>
            <img src={tarts} alt="" />
          </li>
          <li onClick={(e) => this.changeKeyHandler('泡芙', e)}>
            <p><span className="en-font">
              PUFFS </span><br />
              <small>美味泡芙課程</small>
            </p>
            <img src={puffs} alt="" />
          </li>
        </ul>
        <div className="course-info">
          <div className="course-info-content">
            <div>
              {info}
            </div>
          </div>
        </div>
        <div className="course-group">
          <ul className="course-group-filter">
            <li className="active" onClick={(e) => this.changeKeyHandler('All', e)}>全部課程</li>
            <li onClick={(e) => this.changeKeyHandler('千層', e)}>千層蛋糕</li>
            <li onClick={(e) => this.changeKeyHandler('蛋糕', e)}>經典蛋糕</li>
            <li onClick={(e) => this.changeKeyHandler('塔', e)}>甜點塔</li>
            <li onClick={(e) => this.changeKeyHandler('泡芙', e)}>泡芙</li>
          </ul>
          <CSSTransitionGroup
            transitionName="fade"
            transitionEnter={true}
            transitionLeave={true}
            transitionEnterTimeout={500}
            transitionLeaveTimeout={300}
            component='ul'
            className='course-items'
          >
            {
              courseList.map((course) => {
                return <li key={course.course_sid}>
                  <img src={require(`@/assets/images/${course.course_name}s.png`).default} alt="" />
                  <div className="course-items-bar">
                    <div>
                      <h3 className="course-items-bar-name">課程：{course.course_name}</h3>
                    </div>
                    <div>
                      <i className="fas fa-heart" title="加到最愛"></i>
                      <Link to={`/homemade/booking?course=${course.course_sid}`}>
                        <i className="fas fa-bookmark" title="前往預約"></i>
                      </Link>
                    </div>
                  </div>
                  <button className="btn" onClick={() => this.detailCardHandler(course)}>看詳情</button>
                </li>
              })
            }
          </CSSTransitionGroup>
        </div>
      </div>
    )
  }
}

export default Course
