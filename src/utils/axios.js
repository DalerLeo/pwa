import axios from 'axios'
import {path, is, equals} from 'ramda'
import toCamelCase from './toCamelCase'

const CONTENT_TYPE_JSON = 'application/json'

const responseToCamelCase = (data, response) => {
  const responseContentType = path(['content-type'], response)

  if (equals(CONTENT_TYPE_JSON, responseContentType)) {
    return toCamelCase(JSON.parse(data))
  }

  if (is(Object, data) || is(Array, data)) {
    return toCamelCase(data)
  }

  return data
}

export default () => {

  axios.defaults.baseURL = 'https://swapi.co/api'
  axios.defaults.transformResponse = [responseToCamelCase]

  return axios
}