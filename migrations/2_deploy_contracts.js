const CrocoFactory = artifacts.require("CrocoFactory");

module.exports = function (deployer, network, accounts) {
    let currentAccount = accounts[0]
    if (network == 'testnet') {
        console.warn('WARNING: Using account[0] for testnet')
        currentAccount = accounts[0]
    }
    deployer.deploy(CrocoFactory, currentAccount, {from: currentAccount});
};
