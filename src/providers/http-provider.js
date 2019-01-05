const axios = require('axios')
const uuidv4 = require('uuid/v4')

const BaseProvider = require('./base-provider')

/**
 * Provides communication with nodes that expose a JSON-RPC interface over HTTP.
 */
class HttpProvider extends BaseProvider {
  constructor (options = {}) {
    super(options)
    this.http = axios.create({
      baseURL: options.url || 'http://localhost:9898'
    })
  }

  get name () {
    return 'http'
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
