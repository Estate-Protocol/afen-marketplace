require('chai')
    .use(require('chai-as-promised'))
    .should()

const {assert} = require('chai')    

const TokenAfen = artifacts.require('./TokenAfen.sol')
const AfenNft = artifacts.require('./AfenNft.sol')

contract('Afen Nft contracts test', (accounts) => {
    let a_tk, afen
    let res
    before(async() => {
        a_tk = await TokenAfen.deployed()
        afen = await AfenNft.deployed()
    })
    it('token update admin', async() => {
        await a_tk.updateAdmin(accounts[1])
    })
    it('token mint test', async() => {
        await a_tk.updateAdmin(accounts[0], {from: accounts[1]})
        await a_tk.mint(accounts[0], 10000)
        await a_tk.mint(accounts[3], 10000)

        let accounts_0_balance = await a_tk.balanceOf(accounts[0])
        assert.equal(accounts_0_balance, 10000, 'accounts 0 balance is correct')
    })
    it('token burn test', async() => {
        await a_tk.burn(accounts[0], 5000)
        res = await a_tk.balanceOf(accounts[0])
        assert.equal(res, 5000, 'token burn is working correctly')
    })
    it('token transfer test', async() => {
        await a_tk.transfer(accounts[1], 500)
        res = await a_tk.balanceOf(accounts[0])
        assert.equal(res, 4500, 'token transfer is working correctly')
        res = await a_tk.balanceOf(accounts[1])
        assert.equal(res, 500, 'token transfer is working correctly')
    })
    it('withdraw bnb test', async() => {
        await afen.withdrawBnb({from: accounts[0]})
    })
    it('set sell fee transfer test as AFEN token', async() => {
        await a_tk.updateAdmin(afen.address)
        await afen.set_sell()
        res = await a_tk.balanceOf(accounts[0])
        assert.equal(res, 4400, 'afen set_sell is deduct fee from sender correctly')
        res = await a_tk.balanceOf(afen.address)
        assert.equal(res, 100, 'afen set_sell is added fee to afen contract correctly')
    })
    it('create_nft() method test', async() => {
        await afen.create_nft('hash_1', 10000, 100)
        res = await afen.get_nft.call(0)
        assert.equal(res._hash, 'hash_1', 'nft hash value is correct')
        assert.equal(res.a_price, 10000, 'nft a_price value is correct')
        assert.equal(res.b_price, 100, 'nft b_price value is correct')
        assert.equal(res.creator, accounts[0], 'nft hash value is correct')
    })
    it('mint() method test', async() => {
        let creator_balance_0 = await a_tk.balanceOf(accounts[0])
        let owner_balance_0 = await a_tk.balanceOf(afen.address)

        await afen.mint(0, 50, 0)
        res = await afen.balanceOf(accounts[0], 0)
        assert.equal(res, 50, 'mint is working correctly')

        let creator_balance_1 = await a_tk.balanceOf(accounts[0])
        let owner_balance_1 = await a_tk.balanceOf(afen.address)
        
        assert.equal(creator_balance_1, creator_balance_0-400, 'mint fee is deducted correctly')
        assert.equal(owner_balance_0, owner_balance_1 - 400, 'minting fee is added correctly')
    })
    // it('mint() method test - only creator can mint', async() => {
    //     await afen.mint(0, 100, 0, {from:accounts[1]})
    // })
    it('buy() method test', async() => {
        await afen.create_nft('hash_2', 300, 200, {from: accounts[1]})
        await afen.mint(1, 40, 0, {from: accounts[1]})

        await afen.setApprovalForAll(accounts[3], true, {from:accounts[1]})
        await afen.buy(accounts[1], 1, 10, 0, {from: accounts[3]})
    })
})