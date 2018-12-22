const axios = require('axios')

class HttpProvider {
  constructor () {
    this.http = axios.create({
      baseURL: 'http://localhost:9229'
    })
  }

  handle (method, data) {
    return this.http.post('/', {
      jsonrpc: '2.0',
      method: method,
      params: data
    })
  }
}

module.exports = HttpProvider
