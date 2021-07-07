import {
  SET
} from './constant.js'
// reducer處理數據的初始與更新
const Default = {}

export default function memberReducer (preState = Default, action) {
  // reducer要是個純函式
  const { type, data } = action
  switch (type) {
    case SET:
      return data
    default:
      return preState
  }
}
