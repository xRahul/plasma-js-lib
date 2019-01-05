const DefaultProvider = require('./providers').DefaultProvider

/**
 * Acts as a nice wrapper for available JSON-RPC providers.
 */
class PlasmaClient {
  constructor (provider = new DefaultProvider()) {
    this.provider = provider
  }

  /**
   * Sends a transaction to the client.
   * @param {*} transaction A transaction object.
   * @return {string} The transaction receipt.
   */
  async sendTransaction (transaction) {
    return this.provider.handle('pg_sendTransaction', [transaction])
  }

  /**
   * Returns all available accounts.
   * @return {[string]} A list of available account addresses.
   */
  async getAccounts () {
    return this.provider.handle('pg_getAccounts')
  }

  /**
   * Returns the balances of an account.
   * @param {*} address Address of the account to query.
   * @return {*} A list of account balances.
   */
  async getBalances (address) {
    return this.provider.handle('pg_getBalances', [address])
  }

  /**
   * Returns a transaction with the given hash.
   * @param {*} hash Hash of the transaction to query.
   * @return {*} The transaction object.
   */
  async getTransaction (hash) {
    return this.provider.handle('pg_getTransaction', [hash])
  }
}

module.exports = PlasmaClient
