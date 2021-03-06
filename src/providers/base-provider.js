/**
 * Base JSON-RPC provider that can be extended.
 */
class BaseProvider {
  constructor (options = {}) {
    this.options = options
  }

  get name () {
    throw new Error('Classes that extend BaseProvider must implement this method')
  }

  /**
   * Handles a JSON-RPC request.
   * @param {*} method Method to call.
   * @param {*} params Array of parameters for the method.
   * @return {*} The JSON-RPC response or error object.
   */
  async handle (method, params) {
    throw new Error('Classes that extend BaseProvider must implement this method')
  }
}

module.exports = BaseProvider
