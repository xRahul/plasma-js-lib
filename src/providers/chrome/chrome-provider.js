const EXTENSION_ID = '?' // TODO: Set this once we have an extension ID

class ChromeProvider {
  handle (method, data) {
    chrome.runtime.sendMessage(EXTENSION_ID, {
      jsonrpc: '2.0',
      method: method,
      params: data
    })
  }
}

module.exports = ChromeProvider
