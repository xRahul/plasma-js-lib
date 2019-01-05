const BaseProvider = require('./base-provider')
const dummy = require('../dummy/dummy-data')

/**
 * Provides dummy results for local testing.
 */
class DummyProvider extends BaseProvider {
  get name () {
    return 'dummy'
  }

  async handle (method, data) {
    return new Promise((resolve, reject) => {
      try {
        let res
        switch (method) {
          case 'pg_getTransaction':
            res = dummy.DUMMY_TRANSCTIONS.find((tx) => {
              return tx.hash === data.hash
            })
            break
          case 'pg_getBlock':
            res = dummy.DUMMY_BLOCKS.find((block) => {
              return block.number === data.number
            })
            break
          case 'pg_getTransactions':
            res = dummy.DUMMY_TRANSCTIONS
            break
          case 'pg_getBlocks':
            res = dummy.DUMMY_BLOCKS.filter((block) => {
              return block.number >= data.start && block.number <= data.end
            })
            break
        }
        resolve(res)
      } catch (err) {
        reject(err)
      }
    })
  }
}

module.exports = DummyProvider
