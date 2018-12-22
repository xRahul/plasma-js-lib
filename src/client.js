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
    return this.provider.handle('pg_getBalance', {
      address: address
    })
  }

  getHistory (range, start, end) {
    return this.provider.handle('pg_getHistory', {
      range: range,
      start: start,
      end: end
    })
  }

  getBlock (number) {
    return this.provider.handle('pg_getBlock', {
      number: number
    })
  }

  getTransaction (hash) {
    return this.provider.handle('pg_getTransaction', {
      hash: hash
    })
  }

  getBlocks (start, end) {
    return this.provider.handle('pg_getBlocks', {
      start: start,
      end: end
    })
  }

  getTransactions () {
    return this.provider.handle('pg_getTransactions')
  }
}

module.exports = PlasmaClient
