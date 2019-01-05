const PlasmaClient = require('./src/client')
const providers = require('./src/providers/index')

PlasmaClient.providers = providers

module.exports = PlasmaClient
