import React, { Component } from 'react'
import '@/assets/scss/booking.scss'
import PropTypes from 'prop-types'
import { apiGetBooking, apiGetTeachers } from '@/modules/api'
import DetailsCard from '@/components/Booking/DetailsCard'
import store from '@/redux/store'
import { Link } from 'react-router-dom'
class Booking extends Component {
  static propTypes = {
    location: PropTypes.object
  }

  state = {
    currentYear: new Date().getFullYear(),
    currentMonth: new Date().getMonth() + 1,
    currentDate: new Date().getDate(),
    days: new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0).getDate(),
    AllBookList: {},
    bookList: [],
    teacherList: [],
    filterTeacher: '',
    filterTime: '',
    selectedBooking: null
  }

  componentDidMount () {
    const teacherSid = this.props.location.search.split('=')[1]
    this.setState({ filterTeacher: teacherSid })
    apiGetTeachers().then(res => {
      const { status, data } = res.data
      if (status === 200) {
        this.setState({ teacherList: data })
      }
    })
    this.bookListHandler(this.state.currentMonth)
  }

  componentDidUpdate (prevProps, prevState) {
    if (prevState.currentMonth !== this.state.currentMonth) {
      this.bookListHandler(this.state.currentMonth)
    }
  }

  bookListHandler = (month) => {
    apiGetBooking({
      month: month
    }).then(res => {
      const { data, status } = res.data
      const bookObj = {}
      for (const key in data) {
        bookObj[`${data[key].booking_date - 1}T${data[key].booking_time}`] = data[key]
      }
      if (status === 200) {
        this.setState({
          bookList: bookObj,
          AllBookList: bookObj
        })
      }
    }).catch(err => {
      console.log(err)
    })
  }

  monthHandler = (num) => {
    const { currentMonth, currentYear } = this.state
    if (currentMonth >= 12 && num > 0) {
      this.setState({ currentMonth: 1 })
      this.setState(() => {
        return {
          currentYear: currentYear + 1
        }
      })
      this.setState({ days: new Date(currentYear + 1, 1, 0).getDate() })
      return
    }
    if (currentMonth <= 1 && num < 0) {
      this.setState({ currentMonth: 12 })
      this.setState(() => {
        return {
          currentYear: currentYear - 1
        }
      })
      this.setState({ days: new Date(currentYear + 1, 12, 0).getDate() })
      return
    }
    this.setState(() => {
      return { currentMonth: currentMonth + num }
    })
    this.setState({ days: new Date(currentYear + 1, currentMonth + num, 0).getDate() })
  }

  firstWeekdayHandler = (currentYear, currentMonth) => {
    return new Date(currentYear + '/' + currentMonth + '/1').getDay()
  }

  teacherHandler = (teacher) => {
    this.setState({ filterTeacher: teacher })
  }

  timeHandler = (time) => {
    this.setState({ filterTime: time })
  }

  selectedBooking = (detail) => {
    this.setState({ selectedBooking: detail })
  }

  selectedBookingCloseHandler = () => {
    this.setState({ selectedBooking: null })
  }

  filterHandler = (bookList) => {
    const newObj = {}
    if (!this.state.filterTeacher && this.state.filterTime === '') return bookList
    for (const key in bookList) {
      if (this.state.filterTeacher && this.state.filterTime !== '') {
        if (
          Number(bookList[key].teacher_sid) === Number(this.state.filterTeacher) && Number(bookList[key].booking_time) === Number(this.state.filterTime)
        ) {
          newObj[key] = bookList[key]
        }
      }
      if (this.state.filterTeacher && this.state.filterTime === '') {
        if (
          Number(bookList[key].teacher_sid) === Number(this.state.filterTeacher)
        ) {
          newObj[key] = bookList[key]
        }
      }
      if (this.state.filterTime !== '' && !this.state.filterTeacher) {
        if (
          Number(bookList[key].booking_time) === Number(this.state.filterTime)
        ) {
          newObj[key] = bookList[key]
        }
      }
    }
    return newObj
  }

  render () {
    const { currentYear, currentMonth, days, teacherList, filterTeacher, selectedBooking } = this.state
    let { bookList } = this.state
    const { userInfo } = store.getState()
    const firstWeekday = this.firstWeekdayHandler(currentYear, currentMonth)
    const firstWeekdayArr = []
    const daysArr = []
    firstWeekdayArr.length = firstWeekday
    firstWeekdayArr.fill(1)
    daysArr.length = days
    daysArr.fill(1)
    const firstNode = firstWeekdayArr.map((_, i) => {
      return (
        <li className="calendar-days-content disabled" key={i} >
        </li >
      )
    })
    bookList = this.filterHandler(bookList)
    const midNode = daysArr.map((_, i) => {
      return (
        (bookList[`${i}T0`] || bookList[`${i}T1`])
          ? (<li className="calendar-days-content" key={i}>
            <p>
              {currentMonth}/{i + 1}號
            </p>
            {
              bookList[`${i}T0`] && (
                <div className="calendar-days-content-afternoon">
                  <h5>
                    <span>
                      <i className="fas fa-sun"></i> :
                      {
                        bookList[`${i}T0`].course_name
                      }
                    </span>
                    <span>
                      人數
                      {
                        bookList[`${i}T0`].booking_total
                      }
                    </span>
                  </h5>
                  <div>
                    老師 : {
                      bookList[`${i}T0`].teacher_name
                    }
                  </div>
                  <div className="options">
                    <i className="fas fa-info-circle" onClick={() => this.selectedBooking(bookList[`${i}T0`])}></i>
                    {
                      userInfo && (<Link to={`/homemade/booking/${bookList.booking_sid}`}>
                        <i className="fas fa-money-bill-wave"></i>
                      </Link>)
                    }
                  </div>
                </div>)
            }

            {
              bookList[`${i}T1`] && (
                <div className="calendar-days-content-night">
                  <h5>
                    <span>
                      <i className="fas fa-moon"></i> :
                      {
                        bookList[`${i}T1`].course_name
                      }
                    </span>
                    <span>
                      人數
                      {
                        bookList[`${i}T1`].booking_total
                      }
                    </span>
                  </h5>
                  <div>
                    老師 : {
                      bookList[`${i}T1`].teacher_name
                    }
                  </div>
                  <div className="options">
                    <i className="fas fa-info-circle" onClick={() => this.selectedBooking(bookList[`${i}T1`])}></i>
                    {
                      userInfo && (<Link to={`/homemade/booking/${bookList[`${i}T1`].booking_sid}`}>
                        <i className="fas fa-money-bill-wave"></i>
                      </Link>)
                    }
                  </div>
                </div>)
            }
          </li>)
          : (<li className="calendar-days-content disabled" key={i} ></li >)
      )
    })

    return (
      <div className="booking">
        {
          selectedBooking && <DetailsCard selectedBooking={selectedBooking} selectedBookingCloseHandler={this.selectedBookingCloseHandler}></DetailsCard>
        }
        <div className="search-options">
          <label htmlFor="">
            找老師:
            <select name="" id="" onChange={(e) => this.teacherHandler(e.target.value)} value={filterTeacher}>
              <option value="">All</option>
              {
                teacherList.map((teacher) => {
                  return (<option value={teacher.teacher_sid} key={teacher.teacher_sid}>{teacher.teacher_name}</option>)
                })
              }
            </select>
          </label>
          <label htmlFor="">
            時段:
            <select name="" id="" onChange={(e) => this.timeHandler(e.target.value)}>
              <option value="">All</option>
              <option value="0">下午</option>
              <option value="1">晚上</option>
            </select>
          </label>
        </div>
        <div className="calendar">
          <div className="calendar-header">
            <div>
              <i className="fas fa-chevron-left" onClick={() => this.monthHandler(-1)}></i>
              <p>{currentYear}年</p>
              <p>{currentMonth}月</p>
              <i className="fas fa-chevron-right" onClick={() => this.monthHandler(1)}></i>
            </div>
            <div>
              <i className="fas fa-sun"></i>14:00 ~ 18:00
              <i className="fas fa-moon"></i>19:00 ~ 21:00
            </div>
          </div>
          <div className="calendar-body">
            <ul className="calendar-week">
              <li>星期日</li>
              <li>星期一</li>
              <li>星期二</li>
              <li>星期三</li>
              <li>星期四</li>
              <li>星期五</li>
              <li>星期六</li>
            </ul>
            <ul className="calendar-days">
              {firstNode}
              {midNode}
            </ul>
          </div>
        </div>
      </div >
    )
  }
}

export default Booking
