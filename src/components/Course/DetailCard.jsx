import React, { Component } from 'react'
import './DetailCard.scss'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import store from '@/redux/store'
class DetailCard extends Component {
    static propTypes = {
      courseDetail: PropTypes.object,
      closeDetailCardHandler: PropTypes.func,
      isLikeHandler: PropTypes.func,
      courseDetailHandler: PropTypes.func
    }

    state = {
      detail: this.props.courseDetail
    };

    isLikeHandler = (id, isLiked) => {
      this.props.courseDetailHandler(isLiked)
      this.props.isLikeHandler(id, isLiked)
    }

    render () {
      const { detail } = this.props.courseDetail
      const { userInfo } = store.getState()
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
                            <li>蛋糕尺寸 : <span>{detail.course_size ? detail.course_size : '無'}</span></li>
                            <li>蛋糕材料 : <span>{detail.course_detail}</span></li>
                            <li>數量 : <span>{detail.course_quantity}</span></li>
                            <li>備註: <span>{detail.course_mark}</span></li>
                        </ul>
                        <div className="detailCard-buttons">
                            {
                                detail && userInfo && <i className="fas fa-heart" style={detail.isLiked ? { color: '#f78177' } : {}} onClick={() => this.isLikeHandler(detail.course_sid, detail.isLiked)}></i>
                            }
                            <Link to={`/homemade/booking?course=${detail.course_sid}`}>
                                <i className="fas fa-bookmark" title="前往預約"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
      )
    }
}

export default DetailCard
