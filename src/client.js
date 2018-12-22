const ApiWrapper = require('./api-wrapper')

class PlasmaClient {
  constructor (provider) {
    this.api = new ApiWrapper(provider)
  }

  sign (transaction) {
    throw Error('Not implemented')
  }

  sendTransaction (transaction) {
    throw Error('Not implemented')
  }

  startExit () {
    throw Error('Not implemented')
  }

  getBalance (address) {
    return this.api.get('balance', {
      address: address
    })
  }

  getHistory (range, start, end) {
    return this.api.get('history', {
      range: range,
      start: start,
      end: end
    })
  }

  getBlock (number) {
    return this.api.get('block', {
      number: number
    })
  }

  getTransaction (hash) {
    return this.api.get('transaction', {
      hash: hash
    })
  }

  getBlocks (start, end) {
    return this.api.get('blocks', {
      start: start,
      end: end
    })
  }

  getTransactions () {
    return this.api.get('transactions')
  }
}

module.exports = PlasmaClient
