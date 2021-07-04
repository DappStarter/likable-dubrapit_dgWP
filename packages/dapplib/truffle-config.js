require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hockey ensure success shadow shock note mushroom proof include argue bottom trick'; 
let testAccounts = [
"0xc606668957c3731dc845aec003e28f92b6deec75fc3b8fb852911adcf3c6607a",
"0x22eb13157ada2f785f8eb5323fa8997cb6dd76efafa6c02d54488f144c02ff9e",
"0x0961206c1ef3c7c4a834e1fffa525bdb4301204f5917ccc213be9e4993a83cfb",
"0xf2aeb3325f06ba148a355ddd2241529be7a1b310e1b727f15236e5822fd8a254",
"0xde54e92c68950e8935abd4a6ba7ffd7adc948d9fd52d700e85f6a510adf7869e",
"0x3b8908a54c85aec57ff551b4809d7de369a20440687c49f95aa7b27c93dcdb44",
"0x859a5dba09463e900716de27fab3f52460cb11263bef51f3196bc72f82ae92b0",
"0xad2f1cce9511eea2f4a74b9006427658df3a76f73aac0154e2e309c34399e691",
"0x94c4d2002832560d463d2d1bb7ce10da3f7acd0234daadf1ede677c6b505ded9",
"0x36091d0f8d27ce8a6c33d2ed69347f57c0fc71f1caf26b345752ab6c99272f15"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

