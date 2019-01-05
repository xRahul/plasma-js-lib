const DummyProvider = require('./dummy-provider')
const HttpProvider = require('./http-provider')
const ChromeProvider = require('./chrome-provider')

module.exports = {
  DummyProvider,
  HttpProvider,
  ChromeProvider,
  DefaultProvider: HttpProvider
}
