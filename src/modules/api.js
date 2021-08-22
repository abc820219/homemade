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

const LikeRequest = axios.create({
  baseURL: '/like/'
})
LikeRequest.defaults.headers.common.Pragma = 'no-cache'
LikeRequest.interceptors.request.use(
  function (config) {
    loadingStartHandler()
    return config
  },
  function (error) {
    loadingOverHandler()
    return Promise.reject(error)
  }
)
LikeRequest.interceptors.response.use(
  function (response) {
    loadingOverHandler()
    return response
  },
  function (error) {
    loadingOverHandler()
    return Promise.reject(error)
  }
)
export const apiRemoveLikeTeacher = (data) =>
  LikeRequest.post('/removeLikeTeacher', data)
export const apiInsertLikeTeacher = (data) =>
  LikeRequest.post('/insertLikeTeacher', data)
export const apiRemoveLikeCourse = (data) =>
  LikeRequest.post('/removeLikeCourse', data)
export const apiInsertLikeCourse = (data) =>
  LikeRequest.post('/insertLikeCourse', data)
// ----------------------------------------
const BookRequest = axios.create({
  baseURL: '/book/'
})
BookRequest.defaults.headers.common.Pragma = 'no-cache'
BookRequest.interceptors.request.use(
  function (config) {
    loadingStartHandler()
    return config
  },
  function (error) {
    loadingOverHandler()
    return Promise.reject(error)
  }
)
BookRequest.interceptors.response.use(
  function (response) {
    loadingOverHandler()
    return response
  },
  function (error) {
    loadingOverHandler()
    return Promise.reject(error)
  }
)
export const apiGetBooking = (data) =>
  BookRequest.post('/getBooking', data)
export const apiGetOneBooking = (data) =>
  BookRequest.post('/getOneBooking', data)
export const apiInsertBooking = (data) =>
  BookRequest.post('/insertBooking', data)
