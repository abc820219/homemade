import React, { Component } from 'react'
import './DetailCard.scss'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
class DetailCard extends Component {
    static propTypes = {
      courseDetail: PropTypes.object,
      closeDetailCardHandler: PropTypes.func
    }

    render () {
      const { detail } = this.props.courseDetail
      return (
            <div className="detailCard-cover">
                <div className="detailCard-content">
                    <i className="far fa-times-circle" onClick={this.props.closeDetailCardHandler}></i>
                    <img src={require(`@/assets/images/${detail.course_image}s.png`).default} alt="" />
                    <div className="detailCard-detail">
                        <ul>
                            <li>課程名稱 : <span>{detail.course_name}</span></li>
                            <li>課程價格 : <span>{detail.course_price}</span></li>
                            <li>蛋糕種類 : <span>{detail.course_kid}</span></li>
                            <li>蛋糕尺寸 : <span>{detail.course_size}</span></li>
                            <li>蛋糕材料 : <span>{detail.course_detail}</span></li>
                            <li>數量 : <span>{detail.course_quantity}</span></li>
                            <li>備註: <span>{detail.course_mark}</span></li>
                        </ul>
                        <div className="detailCard-buttons">
                            <button className="btn">加入最愛</button>
                            <button className="btn">
                                <Link to={`/homemade/booking?course=${detail.course_sid}`}>
                                    前往預約
                                </Link>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
      )
    }
}

export default DetailCard
