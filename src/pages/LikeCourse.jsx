import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '@/assets/scss/likeCourse.scss'
import { apiRemoveLikeCourse } from '@/modules/api'
import {
  setMemberInfoAction
} from '@/redux/member_action'
import store from '@/redux/store'
class LikeCourse extends Component {
    cancelLikeHandler = (id) => {
      apiRemoveLikeCourse({ courseId: id }).then(res => {
        store.dispatch(setMemberInfoAction())
      })
    }

    render () {
      let { course_like: courseLike } = store.getState()
      courseLike = courseLike && courseLike.filter(course => course.status === 1)
      return (
            <>
                {courseLike && courseLike.length
                  ? (
                        <ul className="likeCourse">
                            {
                                courseLike.map((course, index) => {
                                  return <li key={index}>
                                        <div>
                                            <h5>
                                                課程名稱 : {course.course_name}</h5>
                                            <img src={require(`@/assets/images/${course.course_image}s.png`).default} alt="" />
                                            <p>
                                                <span>
                                                    課程價格:
                                                </span>
                                                {course.course_price}
                                            </p>
                                            <p>
                                                <span>
                                                    蛋糕種類:
                                                </span>
                                                {course.course_kid}
                                            </p>
                                            <p>
                                                <span>
                                                    蛋糕尺寸:
                                                </span>
                                                {course.course_size}
                                            </p>
                                            <p className="likeCourse-skill">
                                                <span>
                                                    蛋糕材料:
                                                </span>
                                                {course.course_detail}
                                            </p>
                                            <p className="likeCourse-skill">
                                                <span>
                                                    數量:
                                                </span>
                                                {course.course_quantity}
                                            </p>
                                            <p>
                                                <span>
                                                    備註:
                                                </span>
                                                {course.course_mark}
                                            </p>
                                        </div>
                                        <div className="likeCourse-buttons">
                                            <button className="btn">
                                                <Link to={`/homemade/booking?course=${course.course_sid}`}>
                                                    前往預約
                                                </Link>
                                            </button>
                                            <button className="btn" onClick={() => this.cancelLikeHandler(course.course_sid)}>取消收藏</button>
                                        </div>
                                    </li>
                                })
                            }
                        </ul>)
                  : (<button className="btn" style={{ width: '100px' }}>
                        <Link to={'/homemade/course'}>
                            前往收藏
                        </Link>
                    </button>)
                }
            </>
      )
    }
}

export default LikeCourse
