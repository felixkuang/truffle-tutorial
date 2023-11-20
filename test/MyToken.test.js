const MyToken = artifacts.require("MyToken");

contract("MyToken", (accounts) => {
    it("get token balance the first account",async ()=>{
        const myToken = await MyToken.deployed();
        console.log("myToken address:",myToken.address);
        const balance = await myToken.balanceOf(accounts[0]);
        console.log("accounts[0] balance:",balance.valueOf());

        //assert.equal(balance.valueOf(), 10000, "10000 wasn't in the first account");
    })
})