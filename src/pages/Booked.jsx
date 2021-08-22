import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { apiGetOneBooking, apiInsertBooking } from '@/modules/api'
import '@/assets/scss/booked.scss'
import Alert from '@/components/Alert/Alert.jsx'
class Booked extends Component {
  static propTypes = {
    match: PropTypes.object,
    history: PropTypes.object
  }

  state = {
    id: this.props.match.params.id,
    bookingData: {},
    people: 1,
    step: 1
  }

  componentDidMount () {
    this.sdkTpdHandler()
    apiGetOneBooking({
      sid: this.state.id
    }).then(res => {
      const { status, data } = res.data
      if (status === 200) {
        this.setState({ bookingData: data[0] })
      }
    })
  }

  peopleHandler = () => {
    if (this.people.value < 1) {
      this.people.value = 1
    }
    this.setState({ people: this.people.value > 0 ? this.people.value : 0 })
  }

  flowHandler = (step) => {
    this.setState({ step: step })
  }

  payHandler = () => {
    const tpdValue = TPDirect.card.getTappayFieldsStatus()
    if (tpdValue.canGetPrime) {
      TPDirect.card.getPrime((res) => {
        apiInsertBooking({
          prime: res.card.prime,
          sid: this.state.id,
          people: this.state.people
        }).then(res => {
          const { status } = res.data
          if (status === 200) {
            return Alert.show('預約成功').then(res => {
              this.props.history.push('/homemade/member')
            })
          }
          return Alert.show('預約失敗')
        })
      })
    }
  }

  sdkTpdHandler = () => {
    TPDirect.setupSDK(
      20429,
      'app_jUKfXnRCJdJhwvcYn6pHvrpcxOjOz0l3ei4FYPNFgdos7lbYh9GTHfnnicUy',
      'sandbox'
    )
    // 以下提供必填 CCV 以及選填 CCV 的 Example
    // 必填 CCV Example
    const fields = {
      number: {
        // css selector
        element: '#card-number',
        placeholder: '**** **** **** ****'
      },
      expirationDate: {
        // DOM object
        element: '#card-expiration-date',
        placeholder: 'MM / YY'
      },
      ccv: {
        element: '#card-ccv',
        placeholder: '後三碼'
      }
    }

    TPDirect.card.setup({
      fields: fields,
      styles: {
        // Style all elements
        input: {
          color: '#e8e8e8'
        },
        // Styling ccv field
        '#ccv': {
          // 'font-size': '16px'
        },
        // Styling expiration-date field
        '#expiration-date': {
          // 'font-size': '16px'
        },
        // Styling card-number field
        '#card-number': {
          // 'font-size': '16px'
          height: '30px'
        },
        // style focus state
        ':focus': {
          // 'color': 'black'
        },
        // style valid state
        '.valid': {
          color: 'green'
        },
        // style invalid state
        '.invalid': {
          color: 'red'
        },
        // Media queries
        // Note that these apply to the iframe, not the root window.
        '@media screen and (max-width: 400px)': {
          input: {
            color: '#000'
          }
        }
      }
    })
  }

  render () {
    const { bookingData, people, step } = this.state
    return (
      <div className='booked'>
        <div className="booked-flow">
          <div className={ step === 1 ? 'step-active step step1' : ' step step1' }>確認預約</div>
          <hr />
          <div className={step === 2 ? 'step-active step step2' : ' step step2' }>預約付款</div>
        </div>

        <div className="booked-content" >
          <ul style={{ display: step === 1 ? 'block' : 'none' }}>
            <li>
              <h5>預約資訊</h5>
            </li>
            <li>
              課程名稱:{bookingData.course_name}
            </li>
            <li>
              課程日期:{bookingData.booking_month + '/' + bookingData.booking_date}號
            </li>
            <li>
              課程時段:{bookingData.booking_time === 1 ? '晚上' : '下午'}
            </li>
            <li>
              老師名稱:{bookingData.teacher_name}
            </li>
            <li>
              價格:{bookingData.course_price} 元
            </li>
            <li>
              <label htmlFor="" >
                預約人數:
                <input type="number" ref={self => { this.people = self }} onChange={this.peopleHandler} defaultValue="1" />
                ／人
              </label>
            </li>
          </ul>

          <div className="booking-card-info" style={{ display: step === 2 ? 'block' : 'none' }}>
            <h5>信用卡付款資訊</h5>
            <div htmlFor="">
              卡片號碼：
              <div className="tpfield" id="card-number"></div>
            </div>
            <div htmlFor="">
              過期時間：
              <div className="tpfield" id="card-expiration-date"></div>
            </div>
            <div htmlFor="">
              驗證密碼：
              <div className="tpfield" id="card-ccv"></div>
            </div>
          </div>

          <hr />
          <div className="total">
            總價格: {people * bookingData.course_price} 元
          </div>
          <div className="options">
            {
              step === 1 && <button className="btn btn-primary" onClick={() => this.flowHandler(2)}>下一步</button>
            }
            {

              step === 2 && (
                <>
                  <button className="btn btn-primary" onClick={() => this.flowHandler(1)}>上一步</button>
                  <button className="btn btn-primary" onClick={this.payHandler}>確認付款</button>
                </>
              )
            }
          </div>
        </div>
      </div>
    )
  }
}

export default Booked
