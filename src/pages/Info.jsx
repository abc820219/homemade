import React, { Component } from 'react'
import store from '@/redux/store'
import '@/assets/scss/info.scss'
import { apiUpdateMember } from '@/modules/api'
import {
  setMemberInfoAction
} from '@/redux/member_action'
import Alert from '@/components/Alert/Alert.jsx'
class Info extends Component {
  changeInfoHandler = () => {
    if (!this.name.value || !this.password.value) {
      Alert.show('姓名與密碼不得為空')
      return
    }
    apiUpdateMember({
      name: this.name.value,
      password: this.password.value,
      phone: this.phone.value
    }
    ).then(res => {
      const { status } = res.data
      if (status === 200) {
        Alert.show('修改成功')
        store.dispatch(setMemberInfoAction())
      }
    }).catch(err => {
      console.log(err)
    })
  }

  render () {
    const { userInfo } = store.getState()
    return (
      <div className="info">
        {
          userInfo &&
          <ul>
            <li>會員信箱 : {userInfo && userInfo.member_email}  </li>
            <li>會員姓名 : <input type="text" ref={(self) => (this.name = self)} defaultValue={userInfo.member_name} /></li>
            <li>會員密碼 : <input type="password" ref={(self) => (this.password = self)} defaultValue={userInfo.member_password} /></li>
            <li>會員電話 : <input type="text" ref={(self) => (this.phone = self)} defaultValue={userInfo.member_phone ? userInfo.member_phone : ''} /> </li>
          </ul>
        }
        <button className="btn" onClick={this.changeInfoHandler}>修改</button>
      </div>
    )
  }
}

export default Info
