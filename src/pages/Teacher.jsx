import React, { Component } from 'react'
import '@/assets/scss/teacher.scss'
class Teacher extends Component {
  render () {
    return (
      <div className="teacher">
        <div className="teacher-name" style={{ backgroundImage: `url(${require('@/assets/images/teacher1-1.png').default})` }}>
        <i className="fas fa-chevron-left"></i>
        <i className="fas fa-chevron-right"></i>
          <div>
            Cedric Grole
            <div className="teacher-content">
              <p>
                Introduce
              </p>
              甜點哲學是，不要重複別人做的，而是要有自己的理念和創造，都是單一主要素材，從不混合味道，而是想辦法把味道發揮到極致，讓人明白在吃的是什麼食材，它原來的味道是怎樣。
            </div>
          </div>
        </div>
        <div className="teacher-details">
          <ul>
            <li>
              老師 : Cedric Grole
            </li>
            <li>
              老師專長 :
              水果擬真甜點
              聖多諾黑泡芙塔
              魔術方塊
            </li>
          </ul>
        </div>
        <div className="teacher-bgCover" style={{ backgroundImage: `url(${require('@/assets/images/teacher1.png').default})` }} alt="" />
      </div>
    )
  }
}

export default Teacher
