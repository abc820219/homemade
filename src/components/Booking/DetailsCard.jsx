import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './DetailsCard.scss'
import store from '@/redux/store'
import { Link } from 'react-router-dom'
class DetailsCard extends Component {
  static propTypes = {
    selectedBooking: PropTypes.object,
    selectedBookingCloseHandler: PropTypes.func
  }

  render () {
    const { selectedBooking, selectedBookingCloseHandler } = this.props
    const { userInfo } = store.getState()
    return (
      <div className="detailsCard-cover">
        <div className="detailsCard">
          <div className="detailsCard-header">
            課程時間:{selectedBooking.booking_month}/{selectedBooking.booking_date} {selectedBooking.booking_time === 0 ? '下午' : '晚上'}
            <i className="far fa-times-circle" onClick={selectedBookingCloseHandler}></i>
          </div>
          <div className="detailsCard-content">
            <div>課程名稱:{selectedBooking.course_name}</div>
            <div>老師名稱:{selectedBooking.teacher_name}</div>
            <div>目前人數:{selectedBooking.booking_total}人</div>
            <div>難易度:{selectedBooking.course_difficult}</div>
            <div>種類:{selectedBooking.course_kid}</div>
            <div>數量:{selectedBooking.course_quantity}</div>
            <div>尺寸:{selectedBooking.course_size}</div>
            <div>備註:{selectedBooking.course_mark}</div>
            <div>價格:{selectedBooking.course_price}元</div>
            <div>食材:{selectedBooking.course_detail}</div>
          </div>
          <div className="detailsCard-booking">
            {userInfo
              ? <button className="btn btn-primary">
                <Link to={`/homemade/booking/${selectedBooking.booking_sid}`}>
                  預約
                </Link>
              </button>
              : <button className="btn btn-primary">
                <Link to="/login">
                  登入
                </Link>
              </button>
            }
          </div>
        </div>
      </div>
    )
  }
}

export default DetailsCard
