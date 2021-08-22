import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import './Confirm.scss'
class Confirm extends Component {
  static propTypes = {
    message: PropTypes.string,
    cancelHandler: PropTypes.func,
    okHandler: PropTypes.func
  }

  render () {
    const { message, cancelHandler, okHandler } = this.props
    return (
      <div className="confirm-cover">
        <div className="confirm">
          <div className="confirm-message">
            {message}
          </div>
          <div className="confirm-options">
            <button className="btn" onClick={okHandler}>確認</button>
            <button className="btn" onClick={cancelHandler}>取消</button>
          </div>
        </div >
      </div>
    )
  }
}
let node = null
export default {
  show (message) {
    return new Promise((resolve, reject) => {
      if (!node) {
        node = document.createElement('div')
        document.body.appendChild(node)
        ReactDOM.render(<Confirm message={message} cancelHandler={() => this.cancelHandler(reject)} okHandler={() => this.okHandler(resolve)}/>, node)
      }
    })
  },
  okHandler (resolve) {
    ReactDOM.unmountComponentAtNode(node)
    document.body.removeChild(node)
    node = null
    resolve()
  },
  cancelHandler (reject) {
    ReactDOM.unmountComponentAtNode(node)
    document.body.removeChild(node)
    node = null
    reject()
  }
}
