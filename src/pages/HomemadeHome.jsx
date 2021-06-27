import React, { Component } from 'react'
import introSvg from '@/assets/images/handmade-intro.svg'
import baguette from '@/assets/images/baguette.svg'
class HomemadeHome extends Component {
  render () {
    return (
      <div className="home-container">
        <div className="home-bg-cover"></div>
        <div className="home-content">
          <img className="baguette baguette-right" src={baguette} />
          <img className="baguette baguette-left" src={baguette} />
          <embed className="home-svg" src={introSvg} type="image/svg+xml" />
          <div className="home-text">
            About
          </div>
        </div>
        <div className="home-board">
          <div className="home-board-cover"></div>
          <div>
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
          </div>
        </div>
      </div>
    )
  }
}

export default HomemadeHome
