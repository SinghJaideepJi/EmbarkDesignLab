// /*global contract, config, it, assert*/

const Foo = require('Embark/contracts/Foo');

let accounts;

let expectedErrors = {
  'onlyOwner':"require owner = msg.sender",
  'quzValue':"quz must be > 2"
};


// For documentation please see https://embark.status.im/docs/contracts_testing.html
config({
  //deployment: {
  //  accounts: [
  //    // you can configure custom accounts with a custom balance
  //    // see https://embark.status.im/docs/contracts_testing.html#Configuring-accounts
  //  ]
  //},
  contracts: {
    "Foo": {
      // args: [100]
    }
  }
}, (_err, web3_accounts) => {
  accounts = web3_accounts
});

contract("Foo", function () {
  this.timeout(0);

  it("Foo was deployed", async function(){
    let address = Foo.options.address;
    assert.ok(address) // has a value and not null
  });

  it("Call baz from a owner with quz > 2 when contract has sufficient balance", async function(){
    try{
      await Foo.methods.baz(10).send({from:accounts[0]});
      assert.ok(true)
    }
    catch(error){
      assert(true)
    }
  });

  it("Call baz from a owner with quz < 2", async function(){
    try{
      await Foo.methods.baz(1).send({from:accounts[0]});
      assert.ok(false)
    }
    catch(error){
      assert(error.message.includes(expectedErrors['quzValue']))
    }
  });

  it("Call baz from a NON-owner with quz > 2", async function(){
    try{
      await Foo.methods.baz(10).send({from:accounts[1]});
      assert.ok(false)
    }
    catch(error){
      assert(error.message.includes(expectedErrors['onlyOwner']))
    }
  });

  it("Call baz from a NON-owner with quz < 2", async function(){
    try{
      await Foo.methods.baz(1).send({from:accounts[1]});
      assert.ok(false)
    }
    catch(error){
      assert(error.message.includes(expectedErrors['onlyOwner']))
      assert(error.message.includes(expectedErrors['quzValue']))
    }
  });

  it("Call baz from a owner with quz > 2 when contract has INsufficient balance", async function(){
    try{
      await Foo.methods.baz(10).send({from:accounts[0]});
      assert.ok(true)
    }
    catch(error){
      assert(error.message.includes(expectedErrors['onlyOwner']))
    }
  });

}
);
