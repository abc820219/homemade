import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '@/assets/scss/likeTeacher.scss'
import { apiRemoveLikeTeacher } from '@/modules/api'
import {
  setMemberInfoAction
} from '@/redux/member_action'
import store from '@/redux/store'
class LikeTeacher extends Component {
    cancelLikeHandler = (id) => {
      apiRemoveLikeTeacher({ teacherId: id }).then(res => {
        store.dispatch(setMemberInfoAction())
      })
    }

    render () {
      let { teacher_like: teacherLike } = store.getState()
      teacherLike = teacherLike && teacherLike.filter(teacher => teacher.status === 1)
      return (
            <>
                {teacherLike && teacherLike.length
                  ? (
                        <ul className="likeTeacher">
                            {
                                teacherLike.map((teacher, index) => {
                                  return <li key={index}>
                                        <div>
                                            <h5>
                                                老師名子 : {teacher.teacher_name}</h5>
                                            <img src={require(`@/assets/images/${teacher.teacher_small_img}`).default} alt="" />
                                            <p>
                                                <span>
                                                    老師專長:
                                                </span>
                                                {teacher.teacher_skill}
                                            </p>
                                            <p className="likeTeacher-skill">
                                                <span>
                                                    老師技能:
                                                </span>
                                                {teacher.teacher_detail}
                                            </p>
                                        </div>
                                        <div className="likeTeacher-buttons">
                                            <button className="btn">
                                                <Link to={`/homemade/booking?teacher=${teacher.teacher_sid}`}>
                                                    前往預約
                                                </Link>
                                            </button>
                                            <button className="btn" onClick={() => this.cancelLikeHandler(teacher.teacher_sid)}>取消收藏</button>
                                        </div>
                                    </li>
                                })
                            }
                        </ul>)
                  : (<button className="btn" style={{ width: '100px' }}>
                        <Link to={'/homemade/teacher'}>
                            前往收藏
                        </Link>
                    </button>)
                }
            </>
      )
    }
}

export default LikeTeacher
