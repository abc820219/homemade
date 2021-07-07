import { apiGetMember } from '@/modules/api'
import { SET } from './constant'
import store from './store'
// 專門定義action物件
export const setMember = data => ({
  type: SET,
  data
})
export const setMemberInfoAction = () => {
  return () => {
    apiGetMember().then(res => {
      const { status } = res.data
      if (status === 200) {
        store.dispatch(setMember(res.data.data))
      }
    })
  }
}
