import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

import './Alert.scss'
class Alert extends Component {
    static propTypes = {
      message: PropTypes.string
    }

    render () {
      const { message } = this.props
      return (
            <div className="alert">
                    {message}
            </div >
      )
    }
}
let node = null
export default {
  show (message, delay = 1000) {
    if (!node) {
      return new Promise((resolve, reject) => {
        node = document.createElement('div')
        document.body.appendChild(node)
        ReactDOM.render(<Alert message={message} />, node)
        setTimeout(() => {
          ReactDOM.unmountComponentAtNode(node)
          document.body.removeChild(node)
          node = null
          resolve()
        }, delay)
      })
    }
  }
}
