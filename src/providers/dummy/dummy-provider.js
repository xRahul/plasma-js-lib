const dummy = require('./dummy')

class DummyProvider {
  handle (method, url, data) {
    let res
    switch (url) {
      case 'transaction':
        res = dummy.DUMMY_TRANSCTIONS.find((tx) => {
          return tx.hash === data.hash
        })
        break
      case 'block':
        res = dummy.DUMMY_BLOCKS.find((block) => {
          return block.number === data.number
        })
        break
      case 'transactions':
        res = dummy.DUMMY_TRANSCTIONS
        break
      case 'blocks':
        res = dummy.DUMMY_BLOCKS.filter((block) => {
          return block.number >= data.start && block.number <= data.end
        })
        break
    }
    return res
  }
}

module.exports = DummyProvider
