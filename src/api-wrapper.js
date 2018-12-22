class ApiWrapper {
  constructor (provider) {
    this.provider = provider
  }

  request (method, url, data) {
    return new Promise((resolve, reject) => {
      try {
        resolve(this.provider.handle(method, url, data))
      } catch (err) {
        reject(err)
      }
    })
  }

  get (url, params) {
    return this.request('GET', url, params)
  }

  post (url, data) {
    return this.request('POST', url, data)
  }
}

module.exports = ApiWrapper
