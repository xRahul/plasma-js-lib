const plasma = require('./index')

const provider = new plasma.providers.DummyProvider()
const client = new plasma.PlasmaClient(provider)

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
