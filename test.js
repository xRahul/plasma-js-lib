const PlasmaClient = require('./src/client')
const DummyProvider = require('./src/providers/dummy/dummy-provider')

const provider = new DummyProvider()
const client = new PlasmaClient(provider)

client.getBlock(1).then((block) => {
  console.log(block)
})

client.getTransaction('0x0000000000000000000000000000000000000000000000000000000000000001').then((tx) => {
  console.log(tx)
})

client.getBlocks(1, 3).then((blocks) => {
  console.log(blocks)
})

client.getTransactions().then((txs) => {
  console.log(txs)
})
