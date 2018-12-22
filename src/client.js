class PlasmaClient {
  constructor (provider) {
    this.provider = provider
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
    return this.provider.handle('balance', {
      address: address
    })
  }

  getHistory (range, start, end) {
    return this.provider.handle('history', {
      range: range,
      start: start,
      end: end
    })
  }

  getBlock (number) {
    return this.provider.handle('block', {
      number: number
    })
  }

  getTransaction (hash) {
    return this.provider.handle('transaction', {
      hash: hash
    })
  }

  getBlocks (start, end) {
    return this.provider.handle('blocks', {
      start: start,
      end: end
    })
  }

  getTransactions () {
    return this.provider.handle('transactions')
  }
}

module.exports = PlasmaClient
