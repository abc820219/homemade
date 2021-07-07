import React, { Component } from 'react'
import '@/assets/scss/teacher.scss'
import { CSSTransitionGroup } from 'react-transition-group'
import { Link } from 'react-router-dom'
import { apiGetTeachers } from '@/modules/api'
let canChangFlag = true
class Teacher extends Component {
  state = {
    teacherInfoArr: [],
    index: 0
  }

  componentDidMount () {
    apiGetTeachers().then(res => {
      console.log(res)
      const { status } = res.data
      if (status === 200) {
        const { data } = res.data
        const teacherData = data.map(info => {
          return {
            id: info.teacher_sid,
            name: info.teacher_name,
            picB: info.teacher_big_img,
            picS: info.teacher_small_img,
            skill: info.teacher_skill,
            detail: info.teacher_detail
          }
        })
        console.log(teacherData)
        this.setState({
          teacherInfoArr: teacherData
        })
      }
    })
  }

  contentHandler = (type) => {
    if (!canChangFlag) return
    canChangFlag = false
    const { length } = this.state.teacherInfoArr
    const { index } = this.state
    let newIndex = null
    if (type === 'next') {
      newIndex = (index + 1) % length
    } else {
      newIndex = ((index + -1) < 0 ? length - 1 : (index + -1))
    }
    this.setState({ index: newIndex })
    setTimeout(() => {
      canChangFlag = true
    }, 800)
  }

  render () {
    const { teacherInfoArr, index } = this.state
    return (
      <div className="teacher">
        <CSSTransitionGroup
          transitionName="fade"
          transitionEnter={true}
          transitionLeave={true}
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}
        >
          {
            teacherInfoArr.map((info, i) => {
              return (
                index === i && <div className="teacher-name" style={{ backgroundImage: `url(${require(`@/assets/images/${info.picS}`).default})` }} key={info.name}>
                  <i className="fas fa-chevron-left" onClick={() => this.contentHandler('next')} ></i>
                  <i className="fas fa-chevron-right" onClick={() => this.contentHandler('pre')} ></i>
                  <div >
                    <p className="teacher-real-name">
                      {info.name}
                    </p>
                    <div className="teacher-content">
                      <p>
                        Introduce
                      </p>
                      {info.detail}
                    </div>
                  </div>
                </div>)
            })
          }</CSSTransitionGroup>
        <div className="teacher-details">
          {
            teacherInfoArr.map((info, i) => {
              return (
                index === i && <ul key={info.name}>
                  <li>
                    老師 : {info.name}
                  </li>
                  <li>
                    老師專長 :
                    {info.skill}
                  </li>
                  <li>
                    <button className="btn">
                      <Link to={`/homemade/booking?teacher=${info.id}`}>
                        前往預約
                      </Link>
                    </button>
                  </li>
                </ul>)
            })
          }
        </div>
        <CSSTransitionGroup
          transitionName="fade"
          transitionEnter={false}
          transitionLeave={true}
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}
        >
          {
            teacherInfoArr.map((info, i) => {
              return (
                index === i && <div className="teacher-bgCover" style={{ backgroundImage: `url(${require(`@/assets/images/${info.picB}`).default})` }} alt="" key={i} />
              )
            })
          }</CSSTransitionGroup>
      </div>
    )
  }
}

export default Teacher
