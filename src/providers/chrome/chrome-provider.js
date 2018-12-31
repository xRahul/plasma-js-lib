class ChromeProvider {
  constructor (options) {
    this.options = options
  }

  handle (method, data) {
    chrome.runtime.sendMessage(this.options.extensionId, {
      jsonrpc: '2.0',
      method: method,
      params: data
    })
  }
}

module.exports = ChromeProvider
