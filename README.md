# truffle-tutorial
truffle tutorial

# Truffle
## How to
### Create a project
1. Create a new directory for your Truffle project:
```shell
mkdir MetaCoin
cd MetaCoin    
```
# 初始化
- truffle init 
# 启动本地环境
- ganache-cli
### Compile contracts
```shell
truffle compile 
# Recompile, overwriting all previously compiled files
truffle compile --all
```

### deploy a contract
Filename: 4_example_migration.js
```javascript
var MyContract = artifacts.require("MyContract");

module.exports = function(deployer) {
  // deployment steps
  deployer.deploy(MyContract);
};
```

```shell
truffle migrate 
# run all your migrations from the beginning
truffle migrate --reset
```
Note that the filename is prefixed with a number and is suffixed by a description. The numbered prefix is required in order to record whether the migration ran successfully.
