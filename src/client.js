class PlasmaClient {
  constructor (provider) {
    this.provider = provider
  }

  sign (transaction) {
    return this.provider.handle('pg_sign', {
      transaction: transaction
    })
  }

  async sendTransaction (transaction) {
    return this.provider.handle('pg_sendTransaction', [transaction])
  }

  startExit () {
    return this.provider.handle('pg_startExit')
  }

  async getAccounts () {
    return this.provider.handle('pg_getAccounts')
  }

  async getBalances (address) {
    return this.provider.handle('pg_getBalances', [address])
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

  async getTransaction (hash) {
    return this.provider.handle('pg_getTransaction', [hash])
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
