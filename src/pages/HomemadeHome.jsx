import React, { Component } from 'react'
import baguette from '@/assets/images/baguette.svg'
import { CSSTransitionGroup } from 'react-transition-group'
import { Link } from 'react-router-dom'
const intro = require('@/assets/images/handmade-intro.svg')
const booking = require('@/assets/images/handmade-booking.svg')
const course = require('@/assets/images/handmade-course.svg')
const teacher = require('@/assets/images/handmade-teacher.svg')
const bgIntro = require('@/assets/images/handmade-bg01.jpg')
const bgBooking = require('@/assets/images/handmade-bg02.jpg')
const bgCourse = require('@/assets/images/handmade-bg03.jpg')
const bgTeacher = require('@/assets/images/handmade-bg04.jpg')
const contentMap = {
  About: 0,
  Booking: 1,
  Course: 2,
  Teacher: 3
}
let canChangFlag = true
class HomemadeHome extends Component {
  state = {
    contentArr: [
      { svg: intro, bgImg: bgIntro, txt: 'About' },
      { svg: booking, bgImg: bgBooking, txt: 'Booking' },
      { svg: course, bgImg: bgCourse, txt: 'Course' },
      { svg: teacher, bgImg: bgTeacher, txt: 'Teacher' }
    ],
    index: 0
  }

  contentHandler = (type) => {
    if (!canChangFlag) return
    canChangFlag = false
    const { length } = this.state.contentArr
    const { index } = this.state
    let newIndex = null
    if (type === 'next') {
      newIndex = (index + 1) % length
    } else {
      newIndex = ((index - 1) < 0 ? length - 1 : (index - 1))
    }
    this.setState({ index: newIndex })
    setTimeout(() => {
      canChangFlag = true
    }, 800)
  }

  render () {
    const { index, contentArr } = this.state
    return (
      <div className="home-container">
        <CSSTransitionGroup
          transitionName="fade-5"
          transitionEnter={true}
          transitionLeave={true}
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}
        >
          {
            contentArr.map((content, i) => {
              return index === i && (<div className="home-bg-cover" style={{ backgroundImage: `url(${content.bgImg.default})` }} key={i}></div>)
            })
          }
        </CSSTransitionGroup>
        <div className="home-content">
          <img className="baguette baguette-right" src={baguette} onClick={() => this.contentHandler('next')} />
          <img className="baguette baguette-left" src={baguette} onClick={() => this.contentHandler('pre')} />
          <CSSTransitionGroup
            transitionName="fade"
            transitionLeave={false}
            transitionEnterTimeout={500}
            transitionLeaveTimeout={300}
          >
            {
              contentArr.map((content, i) => {
                return index === i && <embed className="home-svg" src={content.svg.default} type="image/svg+xml" key={i} />
              })
            }
          </CSSTransitionGroup>
          <div className="home-text">
            <Link to={`/homemade/${contentArr[index].txt.toLowerCase() === 'about' ? '' : contentArr[index].txt.toLowerCase()}`}>
            {contentArr[index].txt}
            </Link>
          </div>
        </div>
        <div className="home-board">
          <div className="home-board-cover"></div>
          {
            index === contentMap.About && (<div>
              <h2>
                關於
                <span className="en-font">
                  HomeMade
                </span>
              </h2>
              將平凡的甜點，透過
              <span className="en-font">
                Homemade
              </span>
              手作烘焙教室的巧思，讓消費者感受到
              <span className="en-font">
                homemade
              </span>
              的貼心，賦予獨特的生命，達到味覺、視覺、嗅覺的三重享受。
              <span className="en-font">
                homemade
              </span>
              的客製化服務，我們想創造的不僅僅只是禮品，而是擁有傳遞幸福和回憶的意義。看見客人臉上的感動和喜悅，對於
              <span className="en-font">
                homemade
              </span>
              而言是無價的! 希望將這份感動延續，讓我們有更多動力創作更多「獨一無二」的作品。
            </div>)
          }
          {
            index === contentMap.Booking && (<div>
              <h2>
                預約課程
              </h2>
              <span className="en-font">
                homemade
              </span>結合創意、設計、可愛、新穎、食物、客製化等元素，希望將這份感動延續，讓我們有更多動力創作更多「獨一無二」的作品。
            </div>)
          }
          {
            index === contentMap.Course && (<div>
              <h2>
                精選課程
              </h2>
              匯集台灣知名手作烘焙店鋪，各式各樣的蛋糕或烘焙小物都能在這邊找到，從名店到你家巷口小店的預訂課程，都可以在我們網站裡做到，還能從介面中預先得知該課程的熱門程度，跟著大家學，準沒錯！
            </div>)
          }
          {
            index === contentMap.Teacher && (<div>
              <h2>
                優質教師
              </h2>
              想知道現在烘焙界最夯的明日之星教師是誰卻不知道門路嗎？想知道當今最熱門的蛋糕誰會製作嗎？不用費心了，享烘可以幫你解決一切問題，我們幫你準備了各大甜點麵包師傅的課程，讓你輕輕鬆鬆就能夠與帥哥美女烘焙師來一場轟轟烈烈的教學時光。
            </div>)
          }
        </div>
      </div>
    )
  }
}

export default HomemadeHome
