import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '@/assets/scss/myBooked.scss'
import store from '@/redux/store'
class MyBooked extends Component {
  render () {
    const { booked } = store.getState()
    return (
            <>
                {
                    booked && booked.length
                      ? (
                          booked.map((content) => {
                            return (
                                    <div className="book-card" key={content.booked_sid}>
                                        <ul >
                                            <li>
                                                課程名稱:{content.course_name}
                                            </li>
                                            <li>
                                                指導老師:{content.teacher_name}
                                            </li>
                                        </ul>
                                        <ul >
                                            <li>
                                                預約人數:{content.people}人
                                            </li>
                                            <li>
                                                金額:{content.people * content.course_price}元
                                            </li>
                                        </ul>
                                        <ul >
                                            <li>
                                                時間: {content.booking_month + '/' + content.booking_date}號
                                            </li>
                                            <li>
                                                時段: {content.booking_time === 0 ? '下午' : '晚上'}
                                            </li>
                                        </ul>
                                    </div>
                            )
                          })
                        )
                      : (
                            <button className="btn" style={{ width: '100px' }}>
                                <Link to={'/homemade/booking'}>
                                    前往預約
                                </Link>
                            </button>
                        )
                }
            </>
    )
  }
}

export default MyBooked
