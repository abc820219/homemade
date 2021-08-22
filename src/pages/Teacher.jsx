import React, { Component } from 'react'
import '@/assets/scss/teacher.scss'
import { CSSTransitionGroup } from 'react-transition-group'
import { Link } from 'react-router-dom'
import { apiGetTeachers, apiInsertLikeTeacher, apiRemoveLikeTeacher } from '@/modules/api'
import store from '@/redux/store'
let canChangFlag = true

class Teacher extends Component {
  state = {
    teacherInfoArr: [],
    index: 0
  }

  componentDidMount () {
    apiGetTeachers().then(res => {
      const { status } = res.data
      if (status === 200) {
        const { teacher_like: teacherLike } = store.getState()
        const { data } = res.data
        const teacherData = data.map(info => {
          const isLiked = teacherLike && teacherLike.some(like => like.teacher_sid === info.teacher_sid && like.status === 1)
          return {
            id: info.teacher_sid,
            name: info.teacher_name,
            picB: info.teacher_big_img,
            picS: info.teacher_small_img,
            skill: info.teacher_skill,
            detail: info.teacher_detail,
            isLiked: isLiked
          }
        })
        this.setState({
          teacherInfoArr: teacherData
        })
      }
    })
  }

  isLikeHandler = (id, isLiked) => {
    const _this = this
    if (isLiked) {
      apiRemoveLikeTeacher({
        teacherId: id
      }).then(res => {
        const { status } = res.data
        if (status === 200) {
          isLikedStateHandler(false)
        }
      }).catch(err => { console.log(err) })
    } else {
      apiInsertLikeTeacher({
        teacherId: id
      }).then(res => {
        const { status } = res.data
        if (status === 200) {
          isLikedStateHandler(true)
        }
      }).catch(err => { console.log(err) })
    }

    function isLikedStateHandler (bool) {
      const teacherInfoArr = _this.state.teacherInfoArr.map(info => {
        if (info.id === id) {
          return {
            ...info,
            isLiked: bool
          }
        }
        return {
          ...info
        }
      })
      _this.setState({ teacherInfoArr: teacherInfoArr })
    }
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
    const { userInfo } = store.getState()
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
                  <li className="teacher-details-name">
                    老師 : {info.name}
                  </li>
                  <li>
                    老師專長 :
                    {info.skill}
                  </li>
                  <li className="teacher-details-options">
                    {
                      userInfo && userInfo.member_sid && <i className="fas fa-heart" style={info.isLiked ? { color: '#f78177' } : {}} onClick={() => this.isLikeHandler(info.id, info.isLiked)}></i>
                    }
                    <Link to={`/homemade/booking?teacher=${info.id}`}>
                      <i className="fas fa-bookmark"></i>
                    </Link>
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
