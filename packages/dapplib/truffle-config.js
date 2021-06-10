require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture roast frame ski struggle cost soccer protect heavy end army gasp'; 
let testAccounts = [
"0x009e989d6a5bd72663c2de14f032cf44198f0c1b19e7acb6e98ad8cb9e151ecd",
"0xfb905ad70fe33c326bb6393eeee5e981f2f5a155ee65ed4b63c1e5469dd6363a",
"0x87f3b3d60ab4e921502b4760047421f0fd6f7866c599101660ea7d01f806a912",
"0xe08aa67d256e70349751ccfb0e1470c5ff33c0ce057b8fbd79f5008d2c514014",
"0xa872dea0b034ce42f501c74a87ef4d35c65240d56b86ff93cb51b205b5b2438f",
"0x5fdef619952e4d7ac2e8f14f781fb9854b0c62a8caa312ab9656037250db184c",
"0x3fc93c32e55b9b223e453feeb1e743229d83bd75005ec41e3572831568850480",
"0x49d0e9b74f062aff4a1d98beb0d9b861f6a0fe2511b82b2a921834a2aeae5e66",
"0x1ee46d221c48af86c78633bffafeda65774a2659efa67bc786d0e207aec5292a",
"0x92220b83033f4235cb311b7b15b9bc8d74828b3120339f4f0750b0ce997aacfa"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 3000000,
            gasPrice: 470000000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


