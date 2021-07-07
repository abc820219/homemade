import axios from 'axios'
import { loadingStartHandler, loadingOverHandler } from './common'
const TeacherRequest = axios.create({
  baseURL: '/teacher/'
})
TeacherRequest.defaults.headers.common.Pragma = 'no-cache'
TeacherRequest.interceptors.request.use(
  function (config) {
    loadingStartHandler()
    return config
  },
  function (error) {
    loadingOverHandler()
    return Promise.reject(error)
  }
)
TeacherRequest.interceptors.response.use(
  function (response) {
    loadingOverHandler()
    return response
  },
  function (error) {
    loadingOverHandler()
    return Promise.reject(error)
  }
)
export const apiGetTeachers = (data) =>
  TeacherRequest.get('/getTeachers', data)
// -----------------------------------------
const CourseRequest = axios.create({
  baseURL: '/course/'
})
CourseRequest.defaults.headers.common.Pragma = 'no-cache'
CourseRequest.interceptors.request.use(
  function (config) {
    loadingStartHandler()
    return config
  },
  function (error) {
    loadingOverHandler()
    return Promise.reject(error)
  }
)
CourseRequest.interceptors.response.use(
  function (response) {
    loadingOverHandler()
    return response
  },
  function (error) {
    loadingOverHandler()
    return Promise.reject(error)
  }
)
export const apiGetCourse = (data) =>
  CourseRequest.get('/getCourses', data)
// -----------------------------------------
const MemberRequest = axios.create({
  baseURL: '/member/'
})
MemberRequest.defaults.headers.common.Pragma = 'no-cache'
MemberRequest.interceptors.request.use(
  function (config) {
    loadingStartHandler()
    return config
  },
  function (error) {
    loadingOverHandler()
    return Promise.reject(error)
  }
)
MemberRequest.interceptors.response.use(
  function (response) {
    loadingOverHandler()
    return response
  },
  function (error) {
    loadingOverHandler()
    return Promise.reject(error)
  }
)
export const apiInsertMember = (data) =>
  MemberRequest.post('/insertMember', data)
export const apiLoginMember = (data) =>
  MemberRequest.post('/loginMember', data)
export const apiGetMember = (data) =>
  MemberRequest.get('/getMember', data)
export const apiLogoutMember = (data) =>
  MemberRequest.get('/logoutMember', data)
export const apiUpdateMember = (data) =>
  MemberRequest.post('/updateMember', data)
// -----------------------------------------
