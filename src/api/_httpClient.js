// Dependencies
import axios from 'axios'

// Http client
export default axios.create({
  // eslint-disable-next-line
  baseURL:  process.env.REACT_APP_API_BASE_URL
})

export const pspApi = axios.create({
  // eslint-disable-next-line
  baseURL: process.env.REACT_APP_API_PSP_URL
})