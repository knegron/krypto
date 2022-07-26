// https://eth-goerli.g.alchemy.com/v2/6jP-fSUvZbZDRUG7oa91bHeT2_giNpNk

require('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/6jP-fSUvZbZDRUG7oa91bHeT2_giNpNk',
      accounts: [ 'fb7069f94c3a02e070ac6889a08efff513277ad6e8fb556977e15f289c96d014' ]
    }
  }
}