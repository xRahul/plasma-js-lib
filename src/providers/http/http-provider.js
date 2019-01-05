const axios = require('axios')
const uuidv4 = require('uuid/v4')

class HttpProvider {
  constructor (url) {
    this.http = axios.create({
      baseURL: url
    })
  }

  async handle (method, params) {
    const rawResponse = await this.http.post('/', {
      jsonrpc: '2.0',
      method: method,
      params: params,
      id: uuidv4()
    })
    const response = JSON.parse(rawResponse.data)
    if (response.error) {
      throw response.error
    }
    return response.result
  }
}

module.exports = HttpProvider
