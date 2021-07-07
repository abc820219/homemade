// 1. 引入createStore 用於創建redux核心store
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
// 2. 引入reducer
import memberReducer from './member_reducer'
// 3. 調用createStore傳入reducer並且暴露
export default createStore(memberReducer, composeWithDevTools(applyMiddleware(thunk)))
