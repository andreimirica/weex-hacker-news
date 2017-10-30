import axios from 'axios'
const baseUrl = 'https://node-hnapi.herokuapp.com'

export default {
  fetchStories (storyType, page) {
    return axios.get(`${baseUrl}/${storyType}?page=${page}`)
  },
  fetchComments (id) {
    return axios.get(`${baseUrl}/item/${id}`)
  },
  fetchUser (id) {
    return axios.get(`${baseUrl}/user/${id}`)
  }
}
