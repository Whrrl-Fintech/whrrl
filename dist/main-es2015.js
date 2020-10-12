(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./build_ropsten/contracts/nftToken.json":
/*!***********************************************!*\
  !*** ./build_ropsten/contracts/nftToken.json ***!
  \***********************************************/
/*! exports provided: contractName, abi, bytecode, compiler, networks, schemaVersion, updatedAt, devdoc, userdoc, default */
/***/ (function(module) {

module.exports = {"contractName":"ERC721PresetMinterPauserAutoId","abi":[{"inputs":[{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"symbol","type":"string"},{"internalType":"string","name":"baseURI","type":"string"},{"internalType":"string","name":"quantity","type":"string"},{"internalType":"string","name":"otherDetails","type":"string"},{"internalType":"uint256","name":"interest","type":"uint256"},{"internalType":"uint256","name":"charges","type":"uint256"},{"internalType":"uint256","name":"tenure","type":"uint256"},{"internalType":"int256","name":"ethprice","type":"int256"},{"internalType":"uint256","name":"price","type":"uint256"},{"internalType":"int256","name":"m2mRatio","type":"int256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Paused","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"previousAdminRole","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"newAdminRole","type":"bytes32"}],"name":"RoleAdminChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleGranted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleRevoked","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Unpaused","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"add","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"inr","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"char","type":"uint256"}],"name":"loan","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"add","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"inr","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"char","type":"uint256"}],"name":"repayment","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[],"name":"DEFAULT_ADMIN_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MINTER_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"PAUSER_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"borrowerWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"feeDepositor","outputs":[{"internalType":"address payable","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"}],"name":"getRoleAdmin","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"getRoleMember","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"}],"name":"getRoleMemberCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"grantRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"hasRole","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"lenderAddress","outputs":[{"internalType":"address payable","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"lenderWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"loanAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"loanAmtToPay","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"int256","name":"currenctPrice","type":"int256"}],"name":"mTwoMCheck","outputs":[{"internalType":"int256","name":"perDiff","type":"int256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address payable","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"renounceRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"repaymentAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"revokeRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalCal","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalInt","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unpause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"int256","name":"ethPrice","type":"int256"}],"name":"updateEthPrice","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"int256","name":"ratio","type":"int256"}],"name":"updateRatio","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"price","type":"uint256"}],"name":"val","outputs":[{"internalType":"address","name":"add","type":"address"},{"internalType":"uint256","name":"valuer","type":"uint256"},{"internalType":"uint256","name":"inr","type":"uint256"},{"internalType":"uint256","name":"char","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"whr","outputs":[{"internalType":"string","name":"quantity","type":"string"},{"internalType":"string","name":"otherDetails","type":"string"},{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"interest","type":"uint256"},{"internalType":"uint256","name":"charges","type":"uint256"},{"internalType":"uint256","name":"tenure","type":"uint256"},{"internalType":"uint256","name":"price","type":"uint256"},{"internalType":"int256","name":"ethprice","type":"int256"},{"internalType":"int256","name":"m2mRatio","type":"int256"},{"internalType":"bool","name":"m2mStatus","type":"bool"}],"stateMutability":"view","type":"function"}],"bytecode":"0x608060405234801561001057600080fd5b5033600460006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550611c5e806100616000396000f3fe608060405260043610610082576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff168062cbf868146100875780630938b5a3146100c857806321d80111146100f157806328a5fa321461012e5780636362d27d1461016b5780638261cf2b14610194578063ce171013146101bf575b600080fd5b34801561009357600080fd5b506100ae60048036036100a991908101906114aa565b610200565b6040516100bf959493929190611a2d565b60405180910390f35b3480156100d457600080fd5b506100ef60048036036100ea91908101906114d3565b6104a5565b005b3480156100fd57600080fd5b50610118600480360361011391908101906114aa565b61068a565b604051610125919061199c565b60405180910390f35b34801561013a57600080fd5b50610155600480360361015091908101906114aa565b6109a1565b60405161016291906118f8565b60405180910390f35b34801561017757600080fd5b50610192600480360361018d91908101906114aa565b610b16565b005b3480156101a057600080fd5b506101a9610cd1565b6040516101b6919061191a565b60405180910390f35b3480156101cb57600080fd5b506101e660048036036101e191908101906113e7565b610fc3565b6040516101f79594939291906119be565b60405180910390f35b60008181548110151561020f57fe5b9060005260206000209060050201600091509050806000015490806001018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156102c15780601f10610296576101008083540402835291602001916102c1565b820191906000526020600020905b8154815290600101906020018083116102a457829003601f168201915b505050505090806002018054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561035f5780601f106103345761010080835404028352916020019161035f565b820191906000526020600020905b81548152906001019060200180831161034257829003601f168201915b505050505090806003018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156103fd5780601f106103d2576101008083540402835291602001916103fd565b820191906000526020600020905b8154815290600101906020018083116103e057829003601f168201915b505050505090806004018054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561049b5780601f106104705761010080835404028352916020019161049b565b820191906000526020600020905b81548152906001019060200180831161047e57829003601f168201915b5050505050905085565b600073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151515610517576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161050e9061193c565b60405180910390fd5b60006105228461068a565b6000015114151515610569576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105609061197c565b60405180910390fd5b600360008481526020019081526020016000206060604051908101604052803373ffffffffffffffffffffffffffffffffffffffff168152602001848152602001838152509080600181540180825580915050906001820390600052602060002090600302016000909192909190915060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506020820151816001015560408201518160020190805190602001906106469291906111de565b505050507f6c881ec046e8da311aeb0b911f4565ec6b4e5a996536e027169884f0d55d99e433838360405161067d939291906118ba565b60405180910390a1505050565b61069261125e565b60008090505b60055481101561099a57826000828154811015156106b257fe5b906000526020600020906005020160000154141561098d576000818154811015156106d957fe5b906000526020600020906005020160a0604051908101604052908160008201548152602001600182018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156107965780601f1061076b57610100808354040283529160200191610796565b820191906000526020600020905b81548152906001019060200180831161077957829003601f168201915b50505050508152602001600282018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156108385780601f1061080d57610100808354040283529160200191610838565b820191906000526020600020905b81548152906001019060200180831161081b57829003601f168201915b50505050508152602001600382018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156108da5780601f106108af576101008083540402835291602001916108da565b820191906000526020600020905b8154815290600101906020018083116108bd57829003601f168201915b50505050508152602001600482018054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561097c5780601f106109515761010080835404028352916020019161097c565b820191906000526020600020905b81548152906001019060200180831161095f57829003601f168201915b50505050508152505091505061099c565b8080600101915050610698565b505b919050565b606060036000838152602001908152602001600020805480602002602001604051908101604052809291908181526020016000905b82821015610b0b5783829060005260206000209060030201606060405190810160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200160018201548152602001600282018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610af35780601f10610ac857610100808354040283529160200191610af3565b820191906000526020600020905b815481529060010190602001808311610ad657829003601f168201915b505050505081525050815260200190600101906109d6565b505050509050919050565b600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515610ba8576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b9f9061195c565b60405180910390fd5b60a060405190810160405280600081526020016020604051908101604052806000815250815260200160206040519081016040528060008152508152602001602060405190810160405280600081525081526020016020604051908101604052806000815250815250600082815481101515610c2057fe5b9060005260206000209060050201600082015181600001556020820151816001019080519060200190610c549291906111de565b506040820151816002019080519060200190610c719291906111de565b506060820151816003019080519060200190610c8e9291906111de565b506080820151816004019080519060200190610cab9291906111de565b50905050600360008281526020019081526020016000206000610cce919061128e565b50565b60606000805480602002602001604051908101604052809291908181526020016000905b82821015610fba578382906000526020600020906005020160a0604051908101604052908160008201548152602001600182018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610dbc5780601f10610d9157610100808354040283529160200191610dbc565b820191906000526020600020905b815481529060010190602001808311610d9f57829003601f168201915b50505050508152602001600282018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610e5e5780601f10610e3357610100808354040283529160200191610e5e565b820191906000526020600020905b815481529060010190602001808311610e4157829003601f168201915b50505050508152602001600382018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610f005780601f10610ed557610100808354040283529160200191610f00565b820191906000526020600020905b815481529060010190602001808311610ee357829003601f168201915b50505050508152602001600482018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610fa25780601f10610f7757610100808354040283529160200191610fa2565b820191906000526020600020905b815481529060010190602001808311610f8557829003601f168201915b50505050508152505081526020019060010190610cf5565b50505050905090565b6000606080606080600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561105d576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016110549061195c565b60405180910390fd5b60056000815480929190600101919050555061107761125e565b60a06040519081016040528060055481526020018b81526020018a8152602001898152602001888152509050600081908060018154018082558091505090600182039060005260206000209060050201600090919290919091506000820151816000015560208201518160010190805190602001906110f79291906111de565b5060408201518160020190805190602001906111149291906111de565b5060608201518160030190805190602001906111319291906111de565b50608082015181600401908051906020019061114e9291906111de565b505050507ff16ec575b16e22b7921b0efd40fba0527c920741baf433ce9ad70bd4a3127329600554826020015183604001518460600151856080015160405161119b959493929190611a2d565b60405180910390a1806000015181602001518260400151836060015184608001518393508292508191508090509550955095509550955050945094509450945094565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061121f57805160ff191683800117855561124d565b8280016001018555821561124d579182015b8281111561124c578251825591602001919060010190611231565b5b50905061125a91906112b2565b5090565b60a06040519081016040528060008152602001606081526020016060815260200160608152602001606081525090565b50805460008255600302906000526020600020908101906112af91906112d7565b50565b6112d491905b808211156112d05760008160009055506001016112b8565b5090565b90565b61133291905b8082111561132e57600080820160006101000a81549073ffffffffffffffffffffffffffffffffffffffff021916905560018201600090556002820160006113259190611335565b506003016112dd565b5090565b90565b50805460018160011615610100020316600290046000825580601f1061135b575061137a565b601f01602090049060005260206000209081019061137991906112b2565b5b50565b600082601f830112151561139057600080fd5b81356113a361139e82611ac9565b611a9c565b915080825260208301602083018583830111156113bf57600080fd5b6113ca838284611bd1565b50505092915050565b60006113df8235611b91565b905092915050565b600080600080608085870312156113fd57600080fd5b600085013567ffffffffffffffff81111561141757600080fd5b6114238782880161137d565b945050602085013567ffffffffffffffff81111561144057600080fd5b61144c8782880161137d565b935050604085013567ffffffffffffffff81111561146957600080fd5b6114758782880161137d565b925050606085013567ffffffffffffffff81111561149257600080fd5b61149e8782880161137d565b91505092959194509250565b6000602082840312156114bc57600080fd5b60006114ca848285016113d3565b91505092915050565b6000806000606084860312156114e857600080fd5b60006114f6868287016113d3565b9350506020611507868287016113d3565b925050604084013567ffffffffffffffff81111561152457600080fd5b6115308682870161137d565b9150509250925092565b61154381611b9b565b82525050565b61155281611b55565b82525050565b600061156382611b0f565b8084526020840193508360208202850161157c85611af5565b60005b848110156115b5578383038852611597838351611745565b92506115a282611b3b565b915060208801975060018101905061157f565b508196508694505050505092915050565b60006115d182611b1a565b808452602084019350836020820285016115ea85611b02565b60005b84811015611623578383038852611605838351611820565b925061161082611b48565b91506020880197506001810190506115ed565b508196508694505050505092915050565b600061163f82611b30565b808452611653816020860160208601611be0565b61165c81611c13565b602085010191505092915050565b600061167582611b25565b808452611689816020860160208601611be0565b61169281611c13565b602085010191505092915050565b6000601782527f596f75206d7573742062652061207265616c20757365720000000000000000006020830152604082019050919050565b6000601682527f536f7272792c206f6e6c7920666f72206f776e657273000000000000000000006020830152604082019050919050565b6000601082527f4865726f206d75737420657869737473000000000000000000000000000000006020830152604082019050919050565b600060608301600083015161175d6000860182611549565b50602083015161177060208601826118ab565b5060408301518482036040860152611788828261166a565b9150508091505092915050565b600060a0830160008301516117ad60008601826118ab565b50602083015184820360208601526117c5828261166a565b915050604083015184820360408601526117df828261166a565b915050606083015184820360608601526117f9828261166a565b91505060808301518482036080860152611813828261166a565b9150508091505092915050565b600060a08301600083015161183860008601826118ab565b5060208301518482036020860152611850828261166a565b9150506040830151848203604086015261186a828261166a565b91505060608301518482036060860152611884828261166a565b9150506080830151848203608086015261189e828261166a565b9150508091505092915050565b6118b481611b87565b82525050565b60006060820190506118cf600083018661153a565b6118dc60208301856118ab565b81810360408301526118ee8184611634565b9050949350505050565b600060208201905081810360008301526119128184611558565b905092915050565b6000602082019050818103600083015261193481846115c6565b905092915050565b60006020820190508181036000830152611955816116a0565b9050919050565b60006020820190508181036000830152611975816116d7565b9050919050565b600060208201905081810360008301526119958161170e565b9050919050565b600060208201905081810360008301526119b68184611795565b905092915050565b600060a0820190506119d360008301886118ab565b81810360208301526119e58187611634565b905081810360408301526119f98186611634565b90508181036060830152611a0d8185611634565b90508181036080830152611a218184611634565b90509695505050505050565b600060a082019050611a4260008301886118ab565b8181036020830152611a54818761166a565b90508181036040830152611a68818661166a565b90508181036060830152611a7c818561166a565b90508181036080830152611a90818461166a565b90509695505050505050565b6000604051905081810181811067ffffffffffffffff82111715611abf57600080fd5b8060405250919050565b600067ffffffffffffffff821115611ae057600080fd5b601f19601f8301169050602081019050919050565b6000602082019050919050565b6000602082019050919050565b600081519050919050565b600081519050919050565b600081519050919050565b600081519050919050565b6000602082019050919050565b6000602082019050919050565b6000611b6082611b67565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b6000819050919050565b6000611ba682611bad565b9050919050565b6000611bb882611bbf565b9050919050565b6000611bca82611b67565b9050919050565b82818337600083830152505050565b60005b83811015611bfe578082015181840152602081019050611be3565b83811115611c0d576000848401525b50505050565b6000601f19601f830116905091905056fea265627a7a723058200cf4a64ddcdf551143f5fe108443105ebe12b94567178ac29a9f19178bf5daf96c6578706572696d656e74616cf50037","compiler":{"name":"solc","version":"0.5.0+commit.1d4f565a.Emscripten.clang"},"networks":{"3":{"events":{},"links":{},"address":"0x57F801F99c1a53aa9f124aE3c6662Dec9B5ddCA9","transactionHash":"0x58705404e455582d5a28e6618951f2572dff177d71bdf1018f726d24516c7746"}},"schemaVersion":"3.0.0","updatedAt":"2019-06-03T13:31:58.835Z","devdoc":{"methods":{}},"userdoc":{"methods":{}}};

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"container mat-typography\"> -->\n<!-- <nav></nav> -->\n<router-outlet></router-outlet>\n<!-- </div> -->\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/common/components/nav/nav.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/common/components/nav/nav.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <mat-sidenav-container class=\"sidenav-container\">\n\n  <mat-sidenav-content>\n    <mat-toolbar color=\"primary\">\n      <button\n        type=\"button\"\n        aria-label=\"Toggle sidenav\"\n        mat-icon-button\n        (click)=\"drawer.toggle()\"\n        *ngIf=\"isHandset$ | async\">\n        <mat-icon aria-label=\"Side nav toggle icon\">menu</mat-icon>\n      </button>\n      <span>Whrrl Warehouse financing\n      </span>\n    </mat-toolbar>\n\n  </mat-sidenav-content>\n</mat-sidenav-container> -->\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/header/header.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/header/header.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">\n  <a href=\"/\" style=\"padding: 6px;\n  margin-right: 17px;\n  margin-left: 10px;\" class=\"logo\"><img style=\"width: 37px;\" src=\"../assets/whrrl.png\"></a>\n  <div>\n    <a href=\"/marketplace\">Marketplace</a>\n    <!-- <a href=\"/my-loans\">My Loans</a> -->\n    <a href=\"/how-it-works\">How it works</a>\n  </div>\n  <!-- <div class=\"header-right\">\n    <input class=\"inputbarsearch\" type=\"text\" name=\"search\" placeholder=\"Search your favourite commodity here\">\n  </div> -->\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n<div style=\"text-align: center;\">\n  <h1 style=\"font-size: 55px;margin: 0;\n  margin-top: 12px;\">Bridging the Gap</h1>\n  <h2 style=\"margin: 0; margin-top: 2px;\n  font-size: 35px;\n  color: grey;\">CeFi to DeFi for $4 Trillion<br> Asset Backed Loans</h2>\n  <p style=\"margin: 22px;\n  margin-bottom: 0;\n  font-size: 25px;color:grey;\">Loan Against Commodities - First Use Case</p>\n  <div style=\"margin-top: 5%;\n  margin-bottom: 7%;\">\n    <img src=\"../assets/1.png\" class=\"centerimg\">\n    <img src=\"../assets/2.png\" class=\"centerimg\">\n    <img src=\"../assets/3.png\" class=\"centerimg\">\n    <img src=\"../assets/4.png\" class=\"centerimg\">\n    <img src=\"../assets/5.png\" class=\"centerimg\">\n  </div>\n  <a href=\"/marketplace\" class=\"explorelend\">EXPLORE & LEND</a>\n  <!-- <div class=\"brderbtm\"></div>\n  <div class=\"row\" style=\"display: flex;\n  width: 100%;\">\n    <div class=\"col-6\">\n      <p><img class=\"ingstar\" src=\"../assets/gstar.png\">\n        Bringing Real Assets to DeFi</p>\n      <p><img class=\"ingstar\" src=\"../assets/gstar.png\">Over $400M+ Commodities Tokenized</p>\n      <p><img class=\"ingstar\" src=\"../assets/gstar.png\">Real-time Loans</p>\n    </div>\n    <div class=\"col-6\">\n      <p><img class=\"ingstar\" src=\"../assets/gstar.png\">Bringing Real Assets to DeFi</p>\n      <p><img class=\"ingstar\" src=\"../assets/gstar.png\">Bringing Real Assets to DeFi</p>\n      <p><img class=\"ingstar\" src=\"../assets/gstar.png\">Bringing Real Assets to DeFi</p>\n    </div>\n  </div> -->\n\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/howitworks/howitworks.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/howitworks/howitworks.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n<div style=\"text-align: center;\">\n  <p class=\"betaa\">Beta</p>\n  <h1 style=\"text-align: left;\n  padding-left: 11%;\n  margin-top: 4%;\n  font-weight: bold;\n  font-size: 22px;\">How it Works?</h1>\n  <p style=\"text-align: left;\n  padding-left: 11%;\n  font-weight: bold;\n  font-size: 16px;\n  color: grey;\n  margin: 0;\n  width: 70%;\">This application is in BETA currently. You can try out the application on the Ropsten Testnet. Please\n    follow the\n    suggested steps.</p>\n  <div style=\"width: 600px;\n  margin: 0 auto;\n  padding: 20px 0;\">\n    <div class=\"row\" style=\"width: 100%; display: flex\">\n      <div class=\"col-2\">\n        <p class=\"colorbtn\">1</p>\n      </div>\n      <div class=\"col-10\" style=\"margin-top: 9px;\">\n        <p class=\"pbtntext\">The borrower applies for a loan against their commodity.</p>\n      </div>\n    </div>\n    <div class=\"row\" style=\"width: 100%; display: flex\">\n      <div class=\"col-2\">\n        <p class=\"colorbtn\">2</p>\n      </div>\n      <div class=\"col-10\">\n        <p class=\"pbtntext\">The lender can select the preferred commodity to lend against.</p>\n      </div>\n    </div>\n    <div class=\"row\" style=\"width: 100%; display: flex\">\n      <div class=\"col-2\">\n        <p class=\"colorbtn\" style=\"margin-top: 25px;\">3</p>\n      </div>\n      <div class=\"col-10\">\n        <p class=\"pbtntext\">Lender needs to click on the \"LEND\" button to check the transaction details. You would be\n          shown the details of the\n          transaction.\n          Visit <a href=\"https://faucet.ropsten.be/\" target=\"_blank\">https://faucet.ropsten.be/</a> for receiving test\n          ETH on the\n          Ropsten Network.</p>\n      </div>\n    </div>\n    <div class=\"row\" style=\"width: 100%; display: flex\">\n      <div class=\"col-2\">\n        <p class=\"colorbtn\" style=\"margin-top: 15px;\">4</p>\n      </div>\n      <div class=\"col-10\">\n        <p class=\"pbtntext\">Sign your transaction with MetaMask, which is essentially a gateway from your\n          browser to\n          blockchain apps. You can install it from <a href=\"https://metamask.io/\"\n            target=\"_blank\">https://metamask.io/</a> </p>\n      </div>\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/marketplace/marketplace.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/marketplace/marketplace.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div id=\"overlay\" (click)=\"off()\">\n  <div id=\"text\">\n    <a class=\"asdhaishgda\" (click)=\"borrow()\" style=\"margin-right: 23%;\n    margin-left: -19%;\">BORROW</a>\n    <a class=\"asdsadYY2\" (click)=\"slend()\">LEND</a>\n  </div>\n</div>\n\n\n<div style=\"text-align: center;\">\n  <!-- <input [checked]=\"test\" type=\"checkbox\"> -->\n  <p style=\"padding: 10px;\n  text-align: right;\n  margin-right: 4%;\n  margin-top: 1%;\n  line-height: 32px;\n  word-spacing: 8px;\">Borrow\n    <label class=\"switch\">\n      <input type=\"checkbox\" [ngModel]=\"test\" name=\"type\" checked (change)=\"checkClicked(test)\">\n      <span class=\"slider round\"></span>\n    </label>\n    Lend\n  </p>\n\n\n  <div class=\"row\" style=\"margin: 40px;margin-top: 5px;\" *ngIf=\"t_lend\">\n    <div class=\"column\" *ngFor=\"let d of data\">\n      <div class=\"bordetyy\" style=\"border: 1px solid #c1e1ff !important;\">\n        <img src=\"../assets/nft/{{getImageName(d.commodity)}}.jpg\" style=\"width: 240px;\">\n        <p style=\"margin-bottom: 0;\n        text-align: left;\n        padding-left: 24px;\n        font-weight: 600;\">{{d.commodity}} <span style=\"float: right;\n    padding-right: 20px;color: grey;\">{{d.quantity}} KGs</span> </p>\n        <p style=\"margin-bottom: 10px;\n        text-align: left;\n        padding-left: 24px;\n        line-height: 20px;\n        margin-top: 10px;\n        font-size: 13px;\"><strong>Value</strong> <br>{{d.ethprice}} ETH (${{d.price}})</p>\n\n        <!-- <p style=\"margin-bottom: 10px;\">Location : {{d.location}}</p> -->\n\n        <p class=\"lenddBtn\" (click)=\"showWhrDetails(d)\">LEND</p>\n      </div>\n    </div>\n  </div>\n  <div class=\"row\" style=\"margin: 40px;margin-top: 5px;\" *ngIf=\"t_borrow\">\n    <!-- <div class=\"col-12\">\n      <p style=\"font-size: 50px;\n      line-height: 55px;\n      color: #0089FF;\n      margin-bottom: 35px;\">It seems you don’t have<br> any commodities</p>\n    </div>\n    <div class=\"row\" style=\"margin: 40px;\n    margin-top: 5px;\n    width: 100%;\" *ngIf=\"t_borrow\">\n      <div class=\"col-6\">\n        <p style=\"color: #0089FF;\n        font-size: 28px;text-align: center;\n        line-height: 36px;\">But you can lend against real assets from anywhere in the world</p>\n      </div>\n      <div class=\"col-6\">\n        <p style=\"width: 200px;\n        background-color: #E2F0FE;\n        text-align: center;\n        padding: 10px;\n        border-radius: 6px;\n        cursor : pointer;margin: 0 auto;\n        color: #689BEB;\" (click)=\"lendddd()\">LEND NOW</p>\n      </div>\n    </div> -->\n\n    <div class=\"column\" *ngFor=\"let d of data\">\n      <div class=\"bordetyy\" style=\"border: 1px solid #fdd2a8 !important;\">\n        <!-- <img src=\"../assets/1.png\" style=\"width: 240px;\"> -->\n        <img src=\"../assets/nft/{{getImageName(d.commodity)}}.jpg\" style=\"width: 240px;\">\n        <p style=\"margin-bottom: 0;\n        text-align: left;\n        padding-left: 24px;\n        font-weight: 600;\">{{d.commodity}} <span style=\"float: right;\n    padding-right: 20px;color: grey;\">{{d.quantity}} KGs</span> </p>\n        <p style=\"margin-bottom: 10px;\n        text-align: left;\n        padding-left: 24px;\n        line-height: 20px;\n        margin-top: 10px;\n        font-size: 13px;\"><strong>Value</strong> <br>{{d.ethprice}} ETH (${{d.price}})</p>\n        <p class=\"borrowbtn\" (click)=\"applyForLoan(d)\">Apply For Loan</p>\n\n      </div>\n    </div>\n  </div>\n\n  <div class=\"modal fade\" id=\"msg\">\n    <div class=\"modal-dialog\" style=\"margin-top: 8%;\">\n      <div class=\"modal-content\" style=\"border-radius: 39px;\">\n        <div class=\"modal-body asssdU\" style=\"padding: 29px;\" *ngIf=\"whrdd\">\n          <p class=\"maintitle\">\n            LEND\n            <img src=\"../assets/nft/{{getImageName(d.commodity)}}.jpg\" class=\"asdsdjkh\">\n            <!-- <img src=\"../assets/2.png\" class=\"asdsdjkh\"> -->\n          </p>\n          <p class=\"asdjhsadhU\">You are lending ETH against <span class=\"makeBold\">{{whrdd.quantity}} KG</span> of\n            <span class=\"makeBold\">{{whrdd.commodity}}</span>\n            stored in a warehouse in\n            <span class=\"makeBold\">{{whrdd.location}}</span></p>\n          <div class=\"row asssdU\" style=\"display: flex;margin-top: 28px;\">\n            <div class=\"col-6\">\n              <p style=\"font-weight: 700;\">Commodity Value</p>\n            </div>\n            <div class=\"col-6\" style=\"text-align: left;\">\n              <p>{{whrdd.ethprice}} ETH (${{whrdd.price}})</p>\n            </div>\n          </div>\n          <div class=\"row asssdU\" style=\"display: flex\">\n            <div class=\"col-6\">\n              <p style=\"font-weight: 700;\">Eligible Loan Amount</p>\n            </div>\n            <div class=\"col-6\" style=\"text-align: left;\">\n              <p>{{whrdd.loanamount_ETH}} ETH (${{whrdd.loanamount}})</p>\n            </div>\n          </div>\n          <div class=\"row asssdU\" style=\"display: flex\">\n            <div class=\"col-6\">\n              <p style=\"font-weight: 700;\">Interest Applicable (@2.25%)</p>\n            </div>\n            <div class=\"col-6\" style=\"text-align: left;\">\n              <p>{{whrdd.interest}} ETH</p>\n            </div>\n          </div>\n          <div class=\"row asssdU\" style=\"display: flex\">\n            <div class=\"col-6\">\n              <p style=\"font-weight: 700;\">Platform Fee (@0.25%)</p>\n            </div>\n            <div class=\"col-6\" style=\"text-align: left;\">\n              <p>{{whrdd.charges}} ETH</p>\n            </div>\n          </div>\n          <div class=\"row asssdU\" style=\"display: flex;margin-top: 20px;\">\n            <div class=\"col-6\">\n              <p style=\"font-weight: 700;\">Pay</p>\n            </div>\n            <div class=\"col-6\" style=\"text-align: left;\">\n              <p>{{whrdd.loanamount_ETH}} ETH</p>\n            </div>\n          </div>\n          <div class=\"row asssdU\" style=\"display: flex\">\n            <div class=\"col-6\">\n              <p style=\"font-weight: 700;\">Get (on repayment)</p>\n            </div>\n            <div class=\"col-6\" style=\"text-align: left;\">\n              <p>{{whrdd.interest}} ETH</p>\n            </div>\n          </div>\n          <p class=\"lendBtnInModal\" *ngIf='!paused &&  0 ==loanAmount' (click)=\"sentEth()\">LEND</p>\n          <p class=\"lendBtnInModal\" *ngIf='userAddress!=owner  && repaymentAmount >0' (click)=\"lenderWithdraw()\">\n            REPAYMENT WITHDRAWAL</p>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"modal fade\" id=\"borrow\">\n    <div class=\"modal-dialog\" style=\"margin-top: 8%;\">\n      <div class=\"modal-content\" style=\"border-radius: 39px;\">\n        <div class=\"modal-body asssdU\" style=\"padding: 29px;\" *ngIf=\"whrdd\">\n          <p class=\"maintitle\">\n            BORROW\n            <img src=\"../assets/nft/{{getImageName(d.commodity)}}.jpg\" class=\"asdsdjkh\">\n          </p>\n          <p class=\"asdjhsadhU\">You are borrowing ETH against <span class=\"makeBold\">{{whrdd.quantity}} KG</span> of\n            <span class=\"makeBold\">{{whrdd.commodity}}</span>\n            stored in a warehouse in\n            <span class=\"makeBold\">{{whrdd.location}}</span></p>\n          <div class=\"row asssdU\" style=\"display: flex;margin-top: 28px;\">\n            <div class=\"col-6\">\n              <p style=\"font-weight: 700;\">Commodity Value</p>\n            </div>\n            <div class=\"col-6\" style=\"text-align: left;\">\n              <p>{{whrdd.ethprice}} ETH (${{whrdd.price}})</p>\n            </div>\n          </div>\n          <div class=\"row asssdU\" style=\"display: flex\">\n            <div class=\"col-6\">\n              <p style=\"font-weight: 700;\">Eligible Loan Amount</p>\n            </div>\n            <div class=\"col-6\" style=\"text-align: left;\">\n              <p>{{whrdd.loanamount_ETH}} ETH (${{whrdd.loanamount}})</p>\n            </div>\n          </div>\n          <div class=\"row asssdU\" style=\"display: flex\">\n            <div class=\"col-6\">\n              <p style=\"font-weight: 700;\">Interest Applicable (@2.25%)</p>\n            </div>\n            <div class=\"col-6\" style=\"text-align: left;\">\n              <p>{{whrdd.interest}} ETH</p>\n            </div>\n          </div>\n          <div class=\"row asssdU\" style=\"display: flex\">\n            <div class=\"col-6\">\n              <p style=\"font-weight: 700;\">Platform Fee (@0.25%)</p>\n            </div>\n            <div class=\"col-6\" style=\"text-align: left;\">\n              <p>{{whrdd.charges}} ETH</p>\n            </div>\n          </div>\n          <div class=\"row asssdU\" style=\"display: flex;margin-top: 20px;\"\n            *ngIf='whrdd.loanamount_ETH && whrdd.interest && whrdd.charges'>\n            <div class=\"col-6\">\n              <p style=\"font-weight: 700;\">Receive</p>\n            </div>\n            <div class=\"col-6\" style=\"text-align: left;\">\n              <p>{{stringToint(whrdd.loanamount_ETH) - stringToint(whrdd.interest ) - stringToint(whrdd.charges)}}ETH\n              </p>\n            </div>\n          </div>\n          <div class=\"row asssdU\" style=\"display: flex\">\n            <div class=\"col-6\">\n              <p style=\"font-weight: 700;\">Repayment Period</p>\n            </div>\n            <div class=\"col-6\" style=\"text-align: left;\">\n              <p> {{whrdd.tenure}} Months</p>\n            </div>\n          </div>\n          <p class=\"borrowBtnInModal\" (click)=\"mint(whrdd)\">BORROW</p>\n          <p class=\"borrowBtnInModal\" *ngIf='paused && userAddress==owner' (click)=\"borrowerWithdraw()\">WITHDRAWAL</p>\n          <p class=\"borrowBtnInModal\" *ngIf='paused && userAddress==owner  && 0!=loanAmount' (click)=\"repaymentEth()\">\n            REPAYMENT</p>\n        </div>\n      </div>\n    </div>\n  </div>\n\n\n  <div class=\"modal fade\" id=\"successLoan\">\n    <div class=\"modal-dialog\" style=\"margin-top: 8%;\">\n      <div class=\"modal-content\" style=\"border-radius: 39px;\">\n        <div class=\"modal-body asssdU\" style=\"padding: 50px;\">\n          <img src=\"../assets/tick.png\" style=\"width: 180px;\n          margin-bottom: 20px;\">\n          <p>Transaction completed Successfully.</p>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"modal fade\" id=\"lendingSuccess\">\n    <div class=\"modal-dialog\" style=\"margin-top: 8%;\">\n      <div class=\"modal-content\" style=\"border-radius: 39px;\">\n        <div class=\"modal-body asssdU\" style=\"padding: 50px;\">\n          <img src=\"../assets/tick.png\" style=\"width: 180px;\n          margin-bottom: 20px;\">\n          <p>Transaction completed Successfully.</p>\n          <p style=\"text-align: left;\n          line-height: 21px;\n          font-size: 14px;\n          margin-top: 20px;\">View the transactions<br><a href=\"{{tx}}\" target=\"_blank\">{{ linkToViewLending}}</a>\n          </p>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/myloans/myloans.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/myloans/myloans.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n<div style=\"text-align: center;\">\n  <h1 style=\"text-align: left;\n    padding-left: 8%;\n    margin-top: 4%;\n    font-weight: bold;\n    font-size: 25px;\">My Loans</h1>\n  <p style=\"text-align: left;\n    padding-left: 8%;\n    font-weight: bold;\n    font-size: 18px;\n    color: grey;\n    margin: 0;\n    width: 45%;\">Here you can check the loans given by you or the loans you have received, and their statuses. Once the\n    loans are repaid, you would be able to see that here as well.</p>\n  <div>\n    <p style=\"margin: 3% 0;\n    margin-top: 6%;\n    line-height: 47px;\n    text-align: center;\n    letter-spacing: 0px;\n    color: #0089FF;\n    opacity: 1;\n    font-size: 45px;\">It seems you haven’t given<br> out any loans yet.</p>\n    <a class=\"asdhaishgda\" href=\"/marketplace\" style=\"margin-right: 22px;\">BORROW NOW</a>\n    <a class=\"asdhaishgda\" href=\"/marketplace\">LEND NOW</a>\n    <img src=\"../assets/guy.png\" style=\"position: absolute;\n  right: 3%;\n  bottom: 0;bottom: -3%;\n  width: 394px;\">\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/nft/components/contract/contract.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/nft/components/contract/contract.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-sm-3 col-md-4 col-lg-3\" *ngFor=\"let h of data\">\n      <div class=\"panel panel-default panel-pet\">\n        <div class=\"panel-heading\">\n          <h3 class=\"panel-title\">{{h.commodity}}</h3>\n        </div>\n        <div class=\"panel-body\">\n          <img alt=\"140x140\" data-src=\"holder.js/140x140\" class=\"img-rounded img-center\" src=\"{{h.picture}}\"\n            data-holder-rendered=\"true\">\n          <br /><br />\n          <strong>Variety</strong>: <span>{{h.variety}}</span><br />\n          <strong>QTN</strong>: <span>{{h.totalQtl}}</span><br />\n          <strong>Location</strong>: <span>{{h.location}}</span><br /><br />\n          <button type=\"button\" style=\"width: 29%;\n          padding: 9px;\n          color: white;\n          margin: 7px;\n          border-color: #8653f7;\n          background-color: #8653f7;\n          border-radius: 33px;\" class=\"btn btn-success mr-2\" (click)=\"showWhrDetails(h)\">Apply for\n            loan</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"modal fade\" id=\"msg\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-body\" style=\"\n              text-align: left;\n              padding: 34px;\">\n        <div class=\"row\" *ngIf='whr'>\n          <div class=\"col-sm-12 col-md-12 col-lg-12\">\n            <div class=\"panel panel-default panel-pet\">\n              <div class=\"panel-heading\">\n                <h3 class=\"panel-title\">{{whr.commodity}}</h3>\n              </div>\n              <div class=\"panel-body\">\n                <img alt=\"140x140\" data-src=\"holder.js/140x140\" class=\"img-rounded img-center\" src=\"{{whr.picture}}\"\n                  data-holder-rendered=\"true\">\n                <br /><br />\n                <strong>Eth price</strong>: <span>{{whr.ethprice}} Eth</span><br />\n                <strong>Tenure</strong>: <span>{{whr.tenure}} Months</span><br />\n                <strong>Proseccing fee</strong>: <span>{{whr.charges/100}} %</span><br /><br />\n                <strong>Interest</strong>: <span>{{whr.interest/100}} %</span><br /><br />\n                <strong>Lender</strong>: <span>{{lenderAddress}}</span><br /><br />\n                <strong>Lien status</strong>: <span>{{paused}}</span><br /><br />\n                <strong>Loan Amount</strong>: <span>{{loanAmount}} Eth</span><br /><br />\n                <strong>Repayment Amount</strong>: <span>{{repaymentAmount}} Eth</span><br /><br />\n                <strong>Total Interest</strong>: <span>{{totalInt}} Eth</span><br /><br />\n                <!-- <strong>Total Int</strong>: <span>{{totalInt}}</span><br /><br />\n                <strong>Total Int</strong>: <span>{{totalInt}}</span><br /><br /> -->\n\n                <button type=\"button\" style=\"width: 29%;\n                padding: 9px;\n                color: white;\n                margin: 7px;\n                border-color: #8653f7;\n                background-color: #8653f7;\n                border-radius: 33px;\" class=\"btn btn-success mr-2\" (click)=\"mint(whr)\" *ngIf='mintStatus  && userAddress == owner '>\n                Apply for\n                  loan</button>\n\n              </div>\n            </div>\n          </div>\n        </div>\n        <button type=\"button\" style=\"width: 29%;\n                padding: 9px;\n                color: white;\n                margin: 7px;\n                border-color: #8653f7;\n                background-color: #8653f7;\n                border-radius: 33px;\" class=\"btn btn-success mr-2\" data-dismiss=\"modal\">Cancel</button>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n\n<div class=\"modal fade\" id=\"seccessmsg\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-body\" style=\"\n              text-align: left;\n              padding: 34px;\">\n        <div class=\"row\">\n          <div class=\"col-sm-12 col-md-12 col-lg-12\">\n            <div class=\"panel panel-default panel-pet\">\n              <div class=\"panel-heading\">\n                <h3 class=\"panel-title\">Transaction {{tx}}completed successfully..</h3>\n              </div>\n\n            </div>\n          </div>\n        </div>\n        <button type=\"button\" style=\"width: 29%;\n                padding: 9px;\n                color: white;\n                margin: 7px;\n                border-color: #8653f7;\n                background-color: #8653f7;\n                border-radius: 33px;\" class=\"btn btn-success mr-2\" data-dismiss=\"modal\">ok</button>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/nft/components/nfts/nfts.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/nft/components/nfts/nfts.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-sm-3 col-md-4 col-lg-3\" *ngFor=\"let h of data\">\n      <div class=\"panel panel-default panel-pet\">\n        <div class=\"panel-heading\">\n          <h3 class=\"panel-title\">{{h.commodity}}</h3>\n        </div>\n        <div class=\"panel-body\">\n          <img alt=\"140x140\" data-src=\"holder.js/140x140\" class=\"img-rounded img-center\" src=\"{{h.picture}}\"\n            data-holder-rendered=\"true\">\n          <br /><br />\n          <strong>Variety</strong>: <span>{{h.variety}}</span><br />\n          <strong>QTN</strong>: <span>{{h.totalQtl}}</span><br />\n          <strong>Location</strong>: <span>{{h.location}}</span><br /><br />\n          <button type=\"button\" style=\"width: 29%;\n                padding: 9px;\n                color: white;\n                margin: 7px;\n                border-color: #8653f7;\n                background-color: #8653f7;\n                border-radius: 33px;\" class=\"btn btn-success mr-2\" (click)=\"showWhrDetails(h)\">Lend</button>\n          <!-- <button class=\"btn btn-default btn-adopt\" type=\"button\" data-id=\"0\" (click)=\"showWhrDetails()\">Lend</button> -->\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"modal fade\" id=\"msg\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-body\" style=\"\n              text-align: left;\n              padding: 34px;\">\n        <div class=\"row\" *ngIf='whr'>\n          <div class=\"col-sm-12 col-md-12 col-lg-12\">\n            <div class=\"panel panel-default panel-pet\">\n              <div class=\"panel-heading\">\n                <h3 class=\"panel-title\">{{whr.commodity}}</h3>\n              </div>\n              <div class=\"panel-body\">\n                <img alt=\"140x140\" data-src=\"holder.js/140x140\" class=\"img-rounded img-center\" src=\"{{whr.picture}}\"\n                  data-holder-rendered=\"true\">\n                <br /><br />\n                <strong>Eth price</strong>: <span>{{whr.ethprice}} Eth</span><br />\n                <strong>Tenure</strong>: <span>{{whr.tenure}} Months</span><br />\n                <strong>Proseccing fee</strong>: <span>{{whr.charges/100}} %</span><br /><br />\n                <strong>Interest</strong>: <span>{{whr.interest/100}} %</span><br /><br />\n                <strong>Lender</strong>: <span>{{lenderAddress}}</span><br /><br />\n                <strong>Lien status</strong>: <span>{{paused}}</span><br /><br />\n                <strong>Loan Amount</strong>: <span>{{loanAmount}} Eth</span><br /><br />\n                <strong>Repayment Amount</strong>: <span>{{repaymentAmount}} Eth</span><br /><br />\n                <strong>Total Interest</strong>: <span>{{totalInt}} Eth</span><br /><br />\n                <!-- <strong>Total Int</strong>: <span>{{totalInt}}</span><br /><br />\n                <strong>Total Int</strong>: <span>{{totalInt}}</span><br /><br /> -->\n\n                <button type=\"button\" style=\"width: 29%;\n                padding: 9px;\n                color: white;\n                margin: 7px;\n                border-color: #8653f7;\n                background-color: #8653f7;\n                border-radius: 33px;\" class=\"btn btn-success mr-2\" (click)=\"mint()\" *ngIf='mintStatus'>Apply for\n                  loan</button>\n\n\n                <button type=\"button\" style=\"width: 29%;\n                    padding: 9px;\n                    color: white;\n                    margin: 7px;\n                    border-color: #8653f7;\n                    background-color: #8653f7;\n                    border-radius: 33px;\" class=\"btn btn-success mr-2\" (click)=\"sentEth()\"\n                  *ngIf='!paused &&  0 ==loanAmount'>Lend</button>\n\n                <button type=\"button\" style=\"width: 29%;\npadding: 9px;\ncolor: white;\nmargin: 7px;\nborder-color: #8653f7;\nbackground-color: #8653f7;\nborder-radius: 33px;\" class=\"btn btn-success mr-2\" (click)=\"repaymentEth()\"\n                  *ngIf='paused && userAddress==owner  && 0!=loanAmount'>Repayment </button>\n\n\n                <button type=\"button\" style=\"width: 29%;\n        padding: 9px;\n        color: white;\n        margin: 7px;\n        border-color: #8653f7;\n        background-color: #8653f7;\n        border-radius: 33px;\" class=\"btn btn-success mr-2\" (click)=\"borrowerWithdraw()\"\n                  *ngIf='paused && userAddress==owner'>Withdraw</button>\n\n                <button type=\"button\" style=\"width: 29%;\npadding: 9px;\ncolor: white;\nmargin: 7px;\nborder-color: #8653f7;\nbackground-color: #8653f7;\nborder-radius: 33px;\" class=\"btn btn-success mr-2 \" (click)=\"lenderWithdraw()\"\n                  *ngIf='userAddress!=owner  && repaymentAmount >0'>Repayment Withdraw</button>\n\n\n\n              </div>\n            </div>\n          </div>\n        </div>\n        <button type=\"button\" style=\"width: 29%;\n                padding: 9px;\n                color: white;\n                margin: 7px;\n                border-color: #8653f7;\n                background-color: #8653f7;\n                border-radius: 33px;\" class=\"btn btn-success mr-2\" data-dismiss=\"modal\">Cancel</button>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n<div class=\"modal fade\" id=\"seccessmsg\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-body\" style=\"\n              text-align: left;\n              padding: 34px;\">\n        <div class=\"row\">\n          <div class=\"col-sm-12 col-md-12 col-lg-12\">\n            <div class=\"panel panel-default panel-pet\">\n              <div class=\"panel-heading\">\n                <h3 class=\"panel-title\">{{tx}}</h3>\n              </div>\n\n            </div>\n          </div>\n        </div>\n        <button type=\"button\" style=\"width: 29%;\n                padding: 9px;\n                color: white;\n                margin: 7px;\n                border-color: #8653f7;\n                background-color: #8653f7;\n                border-radius: 33px;\" class=\"btn btn-success mr-2\" data-dismiss=\"modal\">ok</button>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  max-width: 980px;\n  margin: auto;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsWUFBWTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgbWF4LXdpZHRoOiA5ODBweDtcbiAgbWFyZ2luOiBhdXRvO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'app works!';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _nft_nft_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./nft/nft.module */ "./src/app/nft/nft.module.ts");
/* harmony import */ var _common_components_nav_nav_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./common/components/nav/nav.component */ "./src/app/common/components/nav/nav.component.ts");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm2015/layout.js");
/* harmony import */ var _common_services_util_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./common/services/util.module */ "./src/app/common/services/util.module.ts");
/* harmony import */ var _common_services_web3_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./common/services/web3.service */ "./src/app/common/services/web3.service.ts");
/* harmony import */ var _nft_components_nfts_nfts_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./nft/components/nfts/nfts.component */ "./src/app/nft/components/nfts/nfts.component.ts");
/* harmony import */ var _nft_components_contract_contract_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./nft/components/contract/contract.component */ "./src/app/nft/components/contract/contract.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _howitworks_howitworks_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./howitworks/howitworks.component */ "./src/app/howitworks/howitworks.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _myloans_myloans_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./myloans/myloans.component */ "./src/app/myloans/myloans.component.ts");
/* harmony import */ var _marketplace_marketplace_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./marketplace/marketplace.component */ "./src/app/marketplace/marketplace.component.ts");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./services/data.service */ "./src/app/services/data.service.ts");









// import * as $ from 'jquery'
const appRoutes = [{
        path: 'nft',
        component: _nft_components_nfts_nfts_component__WEBPACK_IMPORTED_MODULE_14__["NftsComponent"],
        data: { title: 'nft' }
    },
    {
        path: 'sc',
        component: _nft_components_contract_contract_component__WEBPACK_IMPORTED_MODULE_15__["ContractComponent"],
        data: { title: 'Contract' }
    },
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_18__["HomeComponent"] },
    { path: 'my-loans', component: _myloans_myloans_component__WEBPACK_IMPORTED_MODULE_19__["MyloansComponent"] },
    { path: 'how-it-works', component: _howitworks_howitworks_component__WEBPACK_IMPORTED_MODULE_17__["HowitworksComponent"] },
    { path: 'marketplace', component: _marketplace_marketplace_component__WEBPACK_IMPORTED_MODULE_20__["MarketplaceComponent"] },
    { path: '**', component: _home_home_component__WEBPACK_IMPORTED_MODULE_18__["HomeComponent"] }
];
// import {
//   MatButtonModule,
//   MatCardModule,
//   MatFormFieldModule,
//   MatInputModule,
//   MatToolbarModule, MatSidenavModule, MatIconModule, MatListModule
// } from '@angular/material';













let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _common_components_nav_nav_component__WEBPACK_IMPORTED_MODULE_10__["NavComponent"],
            _header_header_component__WEBPACK_IMPORTED_MODULE_16__["HeaderComponent"],
            _howitworks_howitworks_component__WEBPACK_IMPORTED_MODULE_17__["HowitworksComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_18__["HomeComponent"],
            _myloans_myloans_component__WEBPACK_IMPORTED_MODULE_19__["MyloansComponent"],
            _marketplace_marketplace_component__WEBPACK_IMPORTED_MODULE_20__["MarketplaceComponent"]
        ],
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"].forRoot(appRoutes, { enableTracing: true } // <-- debugging purposes only
            ),
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"],
            // MatButtonModule,
            // MatCardModule,
            // MatFormFieldModule,
            // MatInputModule,
            // MatToolbarModule,
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _nft_nft_module__WEBPACK_IMPORTED_MODULE_9__["NftModule"],
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_11__["LayoutModule"],
            // MatSidenavModule,
            // MatIconModule,
            // MatListModule,
            _common_services_util_module__WEBPACK_IMPORTED_MODULE_12__["UtilModule"]
        ],
        providers: [
            _common_services_web3_service__WEBPACK_IMPORTED_MODULE_13__["Web3Service"],
            _services_data_service__WEBPACK_IMPORTED_MODULE_21__["dataService"]
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/common/components/nav/nav.component.css":
/*!*********************************************************!*\
  !*** ./src/app/common/components/nav/nav.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sidenav-container {\n  height: 100%;\n}\n\n.sidenav {\n  width: 200px;\n}\n\n.sidenav .mat-toolbar {\n  background: inherit;\n}\n\n.mat-toolbar.mat-primary {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  z-index: 1;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbW9uL2NvbXBvbmVudHMvbmF2L25hdi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usd0JBQWdCO0VBQWhCLGdCQUFnQjtFQUNoQixNQUFNO0VBQ04sVUFBVTtBQUNaIiwiZmlsZSI6InNyYy9hcHAvY29tbW9uL2NvbXBvbmVudHMvbmF2L25hdi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNpZGVuYXYtY29udGFpbmVyIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uc2lkZW5hdiB7XG4gIHdpZHRoOiAyMDBweDtcbn1cblxuLnNpZGVuYXYgLm1hdC10b29sYmFyIHtcbiAgYmFja2dyb3VuZDogaW5oZXJpdDtcbn1cblxuLm1hdC10b29sYmFyLm1hdC1wcmltYXJ5IHtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiAwO1xuICB6LWluZGV4OiAxO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/common/components/nav/nav.component.ts":
/*!********************************************************!*\
  !*** ./src/app/common/components/nav/nav.component.ts ***!
  \********************************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm2015/layout.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");




let NavComponent = class NavComponent {
    constructor(breakpointObserver) {
        this.breakpointObserver = breakpointObserver;
        this.isHandset$ = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["Breakpoints"].Handset)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(result => result.matches));
    }
};
NavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'nav',
        template: __webpack_require__(/*! raw-loader!./nav.component.html */ "./node_modules/raw-loader/index.js!./src/app/common/components/nav/nav.component.html"),
        styles: [__webpack_require__(/*! ./nav.component.css */ "./src/app/common/components/nav/nav.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["BreakpointObserver"]])
], NavComponent);



/***/ }),

/***/ "./src/app/common/services/util.module.ts":
/*!************************************************!*\
  !*** ./src/app/common/services/util.module.ts ***!
  \************************************************/
/*! exports provided: UtilModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtilModule", function() { return UtilModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _web3_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./web3.service */ "./src/app/common/services/web3.service.ts");




let UtilModule = class UtilModule {
};
UtilModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
        ],
        providers: [
            _web3_service__WEBPACK_IMPORTED_MODULE_3__["Web3Service"],
        ],
        declarations: []
    })
], UtilModule);



/***/ }),

/***/ "./src/app/common/services/web3.service.ts":
/*!*************************************************!*\
  !*** ./src/app/common/services/web3.service.ts ***!
  \*************************************************/
/*! exports provided: Web3Service */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Web3Service", function() { return Web3Service; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");




const Web3 = __webpack_require__(/*! web3 */ "./node_modules/web3/src/index.js");
let Web3Service = class Web3Service {
    constructor() {
        this.ready = false;
        this.accountsObservable = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.refreshAccounts = () => {
            if (typeof window.web3 !== 'undefined') {
                this.web3.eth.getAccounts((err, accs) => {
                    // console.log('Observed new accounts accs',accs);
                    if (err != null) {
                        console.warn('There was an error fetching your accounts.');
                        return;
                    }
                    // Get the initial account balance so it can be displayed.
                    if (accs.length === 0) {
                        console.warn('Couldn\'t get any accounts! Make sure your Ethereum client is configured correctly.');
                        return;
                    }
                    if (!this.accounts || this.accounts.length !== accs.length || this.accounts[0] !== accs[0]) {
                        console.log('Observed new accounts', accs);
                        this.accountsObservable.next(accs);
                        this.accounts = accs;
                        localStorage.setItem("userAccount", this.accounts[0]);
                        console.log('Observed new accounts', this.accounts);
                    }
                    this.ready = true;
                });
            }
        };
        this.bootstrapWeb3();
    }
    enableAccounts() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (window.ethereum) {
                window.web3 = new Web3(ethereum);
                try {
                    // Request account access if needed
                    yield ethereum.enable();
                }
                catch (error) {
                    // User denied account access...
                }
            }
        });
    }
    bootstrapWeb3() {
        // Checking if Web3 has been injected by the browser (Mist/MetaMask)
        if (typeof window.web3 !== 'undefined') {
            // Use Mist/MetaMask's provider
            this.web3 = new Web3(new Web3(window.web3.currentProvider));
        }
        else {
            console.log('No web3? You should consider trying MetaMask!');
            // Hack to provide backwards compatibility for Truffle, which uses web3js 0.20.x
            Web3.providers.HttpProvider.prototype.sendAsync = Web3.providers.HttpProvider.prototype.send;
            // fallback - use your fallback strategy (local node / hosted node + in-dapp id mgmt / fail)
            this.web3 = new Web3(new Web3.providers.HttpProvider(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].RPCProvider));
        }
        setInterval(this.refreshAccounts, 500);
        // check if privacy mode is activated and request access
        this.enableAccounts().then(() => {
            this.refreshAccounts();
        });
        this.abi = this.artifactsToContract();
    }
    artifactsToContract() {
        console.log("localStorage.getItem", localStorage.getItem("sc"));
        if (this.web3) {
            const instance = new this.web3.eth.Contract(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].ABI.abi, 
            // '0x57F801F99c1a53aa9f124aE3c6662Dec9B5ddCA9');
            // this.sc);
            localStorage.getItem("sc") ? localStorage.getItem("sc") : '0x57F801F99c1a53aa9f124aE3c6662Dec9B5ddCA9');
            return instance;
        }
    }
    getProvider() {
        return this.web3.currentProvider;
    }
    trasfer(receiver, sender, value) {
        return this.web3.eth.sendTransaction({
            to: receiver, from: sender,
            value: this.web3.utils.toWei(value, "ether")
        });
    }
    getAccount() {
        if (!this.accounts) {
            console.log('Couldn\'t get any accounts! Make sure your Ethereum client is configured correctly.');
            return null;
        }
        return this.accounts[0];
    }
};
Web3Service = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], Web3Service);



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header {\n  overflow: hidden;\n  background-color: white;\n  padding: 10px 10px;\n  border-bottom: 1px solid #dadada;\n  position: relative;\n  z-index: 10;\n}\n\n/* Style the header links */\n\n.header a {\n  float: left;\n  color: black;\n  text-align: center;\n  padding: 12px 24px;\n  text-decoration: none;\n  font-size: 17px;\n  line-height: 25px;\n  border-radius: 4px;\n}\n\n/* Style the logo link (notice that we set the same value of line-height and font-size to prevent the header to increase when the font gets bigger */\n\n.header a.logo {\n  font-size: 25px;\n  font-weight: bold;\n}\n\n/* Change the background color on mouse-over */\n\n.header a:hover {\n  background-color: #ddd;\n  color: black;\n}\n\n/* Style the active/current link*/\n\n.header a.active {\n  /* background-color: dodgerblue; */\n  /* color: white; */\n}\n\n/* Float the link section to the right */\n\n.header-right {\n  /* float: right; */\n}\n\n/* Add media queries for responsiveness - when the screen is 500px wide or less, stack the links on top of each other */\n\n@media screen and (max-width: 500px) {\n  .header a {\n    float: none;\n    display: block;\n    text-align: left;\n  }\n\n  .header-right {\n    float: none;\n  }\n}\n\n.inputbarsearch {\n  width: 35%;\n  height: 44px;\n  border-radius: 50px;\n  border: 1px solid #cccccc;\n  padding: 9px 14px;\n  margin-top: 4px;\n  float: right;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsZ0NBQWdDO0VBQ2hDLGtCQUFrQjtFQUNsQixXQUFXO0FBQ2I7O0FBRUEsMkJBQTJCOztBQUMzQjtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7O0FBRUEsb0pBQW9KOztBQUNwSjtFQUNFLGVBQWU7RUFDZixpQkFBaUI7QUFDbkI7O0FBRUEsOENBQThDOztBQUM5QztFQUNFLHNCQUFzQjtFQUN0QixZQUFZO0FBQ2Q7O0FBRUEsaUNBQWlDOztBQUNqQztFQUNFLGtDQUFrQztFQUNsQyxrQkFBa0I7QUFDcEI7O0FBRUEsd0NBQXdDOztBQUN4QztFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQSx1SEFBdUg7O0FBQ3ZIO0VBQ0U7SUFDRSxXQUFXO0lBQ1gsY0FBYztJQUNkLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLFdBQVc7RUFDYjtBQUNGOztBQUdBO0VBQ0UsVUFBVTtFQUNWLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsWUFBWTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlciB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAxMHB4IDEwcHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGFkYWRhO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDEwO1xufVxuXG4vKiBTdHlsZSB0aGUgaGVhZGVyIGxpbmtzICovXG4uaGVhZGVyIGEge1xuICBmbG9hdDogbGVmdDtcbiAgY29sb3I6IGJsYWNrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDEycHggMjRweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBmb250LXNpemU6IDE3cHg7XG4gIGxpbmUtaGVpZ2h0OiAyNXB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG5cbi8qIFN0eWxlIHRoZSBsb2dvIGxpbmsgKG5vdGljZSB0aGF0IHdlIHNldCB0aGUgc2FtZSB2YWx1ZSBvZiBsaW5lLWhlaWdodCBhbmQgZm9udC1zaXplIHRvIHByZXZlbnQgdGhlIGhlYWRlciB0byBpbmNyZWFzZSB3aGVuIHRoZSBmb250IGdldHMgYmlnZ2VyICovXG4uaGVhZGVyIGEubG9nbyB7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi8qIENoYW5nZSB0aGUgYmFja2dyb3VuZCBjb2xvciBvbiBtb3VzZS1vdmVyICovXG4uaGVhZGVyIGE6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi8qIFN0eWxlIHRoZSBhY3RpdmUvY3VycmVudCBsaW5rKi9cbi5oZWFkZXIgYS5hY3RpdmUge1xuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBkb2RnZXJibHVlOyAqL1xuICAvKiBjb2xvcjogd2hpdGU7ICovXG59XG5cbi8qIEZsb2F0IHRoZSBsaW5rIHNlY3Rpb24gdG8gdGhlIHJpZ2h0ICovXG4uaGVhZGVyLXJpZ2h0IHtcbiAgLyogZmxvYXQ6IHJpZ2h0OyAqL1xufVxuXG4vKiBBZGQgbWVkaWEgcXVlcmllcyBmb3IgcmVzcG9uc2l2ZW5lc3MgLSB3aGVuIHRoZSBzY3JlZW4gaXMgNTAwcHggd2lkZSBvciBsZXNzLCBzdGFjayB0aGUgbGlua3Mgb24gdG9wIG9mIGVhY2ggb3RoZXIgKi9cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XG4gIC5oZWFkZXIgYSB7XG4gICAgZmxvYXQ6IG5vbmU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgfVxuXG4gIC5oZWFkZXItcmlnaHQge1xuICAgIGZsb2F0OiBub25lO1xuICB9XG59XG5cblxuLmlucHV0YmFyc2VhcmNoIHtcbiAgd2lkdGg6IDM1JTtcbiAgaGVpZ2h0OiA0NHB4O1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjY2NjO1xuICBwYWRkaW5nOiA5cHggMTRweDtcbiAgbWFyZ2luLXRvcDogNHB4O1xuICBmbG9hdDogcmlnaHQ7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HeaderComponent = class HeaderComponent {
    constructor() { }
    ngOnInit() {
    }
};
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: __webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/index.js!./src/app/header/header.component.html"),
        styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], HeaderComponent);



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".explorelend {\n  margin: 0 auto;\n  background-color: #009339;\n  color: white;\n  padding: 12px 50px;\n  border-radius: 40px;\n  word-spacing: 1px;\n  letter-spacing: 1px;\n  text-decoration: none;\n  font-size: 18px;\n  font-weight: 600;\n}\n\n.brderbtm {\n  border-bottom: 3px solid #009339;\n  width: 816px;\n  margin: 0 auto;\n  margin-top: 17px;\n}\n\n.col-6 {\n  max-width: 50%;\n  width: 50%;\n}\n\n.ingstar {\n  width: 23px;\n  padding-left: 32%;\n  margin-right: 6px;\n}\n\n.col-6 p {\n  text-align: left\n}\n\n.centerimg {\n  width: 225px;\n    height: 216px;\n    margin: 0 23px;\n    border-radius: 22px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0VBQ2QseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQ0FBZ0M7RUFDaEMsWUFBWTtFQUNaLGNBQWM7RUFDZCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsVUFBVTtBQUNaOztBQUdBO0VBQ0UsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRTtBQUNGOztBQUdBO0VBQ0UsWUFBWTtJQUNWLGFBQWE7SUFDYixjQUFjO0lBQ2QsbUJBQW1CO0FBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhwbG9yZWxlbmQge1xuICBtYXJnaW46IDAgYXV0bztcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwOTMzOTtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAxMnB4IDUwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDQwcHg7XG4gIHdvcmQtc3BhY2luZzogMXB4O1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLmJyZGVyYnRtIHtcbiAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICMwMDkzMzk7XG4gIHdpZHRoOiA4MTZweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIG1hcmdpbi10b3A6IDE3cHg7XG59XG5cbi5jb2wtNiB7XG4gIG1heC13aWR0aDogNTAlO1xuICB3aWR0aDogNTAlO1xufVxuXG5cbi5pbmdzdGFyIHtcbiAgd2lkdGg6IDIzcHg7XG4gIHBhZGRpbmctbGVmdDogMzIlO1xuICBtYXJnaW4tcmlnaHQ6IDZweDtcbn1cblxuLmNvbC02IHAge1xuICB0ZXh0LWFsaWduOiBsZWZ0XG59XG5cblxuLmNlbnRlcmltZyB7XG4gIHdpZHRoOiAyMjVweDtcbiAgICBoZWlnaHQ6IDIxNnB4O1xuICAgIG1hcmdpbjogMCAyM3B4O1xuICAgIGJvcmRlci1yYWRpdXM6IDIycHg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomeComponent = class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
};
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html"),
        styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], HomeComponent);



/***/ }),

/***/ "./src/app/howitworks/howitworks.component.css":
/*!*****************************************************!*\
  !*** ./src/app/howitworks/howitworks.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".colorbtn {\n  background: linear-gradient(90deg, rgba(51, 161, 255, 1) 23%, rgba(20, 69, 199, 1) 72%);\n  padding: 8px;\n  padding-top: 11px;\n  border-radius: 40px;\n  color: white;\n  font-weight: bold;\n  font-size: 19px;\n  width: 50px;\n  height: 50px;\n  margin: 0;\n}\n\n.pbtntext {\n  text-align: left;\n  letter-spacing: 0px;\n  color: #8E8E8E;\n  opacity: 1;\n  font-size: 18px;\n  margin: 0;\n}\n\n.col-10 {\n  width: 90%;\n}\n\n.col-2 {\n  width: 10%;\n}\n\n.row {\n  margin: 35px 0;\n}\n\n.betaa {\n  /* content: \"beta\"; */\n  position: fixed;\n  width: 95px;\n  height: 25px;\n  background: #EE8E4A;\n  top: 80px;\n  left: -23px;\n  text-align: center;\n  font-size: 13px;\n  text-transform: uppercase;\n  font-weight: bold;\n  color: #fff;\n  line-height: 27px;\n  -webkit-transform: rotate(-45deg);\n          transform: rotate(-45deg);\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG93aXR3b3Jrcy9ob3dpdHdvcmtzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1RkFBdUY7RUFDdkYsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsV0FBVztFQUNYLFlBQVk7RUFDWixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxVQUFVO0VBQ1YsZUFBZTtFQUNmLFNBQVM7QUFDWDs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFHQTtFQUNFLGNBQWM7QUFDaEI7O0FBR0E7RUFDRSxxQkFBcUI7RUFDckIsZUFBZTtFQUNmLFdBQVc7RUFDWCxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLFNBQVM7RUFDVCxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZix5QkFBeUI7RUFDekIsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsaUNBQXlCO1VBQXpCLHlCQUF5QjtBQUMzQiIsImZpbGUiOiJzcmMvYXBwL2hvd2l0d29ya3MvaG93aXR3b3Jrcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbG9yYnRuIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2JhKDUxLCAxNjEsIDI1NSwgMSkgMjMlLCByZ2JhKDIwLCA2OSwgMTk5LCAxKSA3MiUpO1xuICBwYWRkaW5nOiA4cHg7XG4gIHBhZGRpbmctdG9wOiAxMXB4O1xuICBib3JkZXItcmFkaXVzOiA0MHB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDE5cHg7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIG1hcmdpbjogMDtcbn1cblxuLnBidG50ZXh0IHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbGV0dGVyLXNwYWNpbmc6IDBweDtcbiAgY29sb3I6ICM4RThFOEU7XG4gIG9wYWNpdHk6IDE7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbWFyZ2luOiAwO1xufVxuXG4uY29sLTEwIHtcbiAgd2lkdGg6IDkwJTtcbn1cblxuLmNvbC0yIHtcbiAgd2lkdGg6IDEwJTtcbn1cblxuXG4ucm93IHtcbiAgbWFyZ2luOiAzNXB4IDA7XG59XG5cblxuLmJldGFhIHtcbiAgLyogY29udGVudDogXCJiZXRhXCI7ICovXG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IDk1cHg7XG4gIGhlaWdodDogMjVweDtcbiAgYmFja2dyb3VuZDogI0VFOEU0QTtcbiAgdG9wOiA4MHB4O1xuICBsZWZ0OiAtMjNweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDEzcHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogI2ZmZjtcbiAgbGluZS1oZWlnaHQ6IDI3cHg7XG4gIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/howitworks/howitworks.component.ts":
/*!****************************************************!*\
  !*** ./src/app/howitworks/howitworks.component.ts ***!
  \****************************************************/
/*! exports provided: HowitworksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HowitworksComponent", function() { return HowitworksComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HowitworksComponent = class HowitworksComponent {
    constructor() { }
    ngOnInit() {
    }
};
HowitworksComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-howitworks',
        template: __webpack_require__(/*! raw-loader!./howitworks.component.html */ "./node_modules/raw-loader/index.js!./src/app/howitworks/howitworks.component.html"),
        styles: [__webpack_require__(/*! ./howitworks.component.css */ "./src/app/howitworks/howitworks.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], HowitworksComponent);



/***/ }),

/***/ "./src/app/marketplace/marketplace.component.css":
/*!*******************************************************!*\
  !*** ./src/app/marketplace/marketplace.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".col-4 {\n  width: 50%;\n}\n\n.column {\n  float: left;\n  width: 25%;\n  padding: 10px;\n}\n\n/* Clear floats after the columns */\n\n.row:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n\n* {\n  box-sizing: border-box;\n}\n\n.bordetyy {\n  border: 1px solid grey;\n  margin: 8px 24px;\n  border-radius: 16px;\n  padding: 14px 0;\n}\n\n.borrowbtn {\n  width: 135px;\n  background-color: #FEDBBD;\n  color: #C48150;\n  border-radius: 16px;\n  padding: 5px;\n  font-size: 12px;\n  margin-top: -2px;\n  float: right;\n  margin-right: 19px;\n  cursor: pointer;\n  text-transform: uppercase;\n}\n\n.lenddBtn {\n  width: 93px;\n  background-color: #E2F0FE;\n  color: #689BEB;\n  border-radius: 16px;\n  padding: 5px;\n  font-size: 14px;\n  margin-top: -3px;\n  float: right;\n  margin-right: 19px;\n  cursor: pointer;\n}\n\n.asdsdjkh {\n  width: 130px;\n  border-radius: 113px;\n  position: absolute;\n  right: 12px;\n  top: 15px;\n}\n\n.asdjhsadhU {\n  width: 52%;\n  font-size: 14px;\n  text-align: left;\n  margin-top: 13px;\n}\n\n.maintitle {\n  margin-bottom: 16px;\n  font-size: 41px;\n  font-weight: bold;\n  text-align: left;\n  margin: 0;\n}\n\n.switch {\n  position: relative;\n  display: inline-block;\n  width: 60px;\n  height: 34px;\n}\n\n.switch input {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #ccc;\n  transition: .4s;\n}\n\n.slider:before {\n  position: absolute;\n  content: \"\";\n  height: 26px;\n  width: 26px;\n  left: 4px;\n  bottom: 4px;\n  background-color: white;\n  transition: .4s;\n}\n\ninput:checked+.slider {\n  background-color: #2196F3;\n}\n\ninput:focus+.slider {\n  box-shadow: 0 0 1px #2196F3;\n}\n\ninput:checked+.slider:before {\n  -webkit-transform: translateX(26px);\n  transform: translateX(26px);\n}\n\n/* Rounded sliders */\n\n.slider.round {\n  border-radius: 34px;\n}\n\n.slider.round:before {\n  border-radius: 50%;\n}\n\n#overlay {\n  position: fixed;\n  /* Sit on top of the page content */\n  display: none;\n  /* Hidden by default */\n  width: 100%;\n  /* Full width (cover the whole page) */\n  height: 100%;\n  /* Full height (cover the whole page) */\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: white;\n  /* Black background with opacity */\n  z-index: 2;\n  /* Specify a stack order in case you're using a different order for other elements */\n  cursor: pointer;\n  /* Add a pointer on hover */\n}\n\n#text {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  font-size: 50px;\n  color: white;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  -ms-transform: translate(-50%, -50%);\n}\n\n.asdhaishgda {\n  margin: 0 auto;\n  background-color: #FEDBBD;\n  color: #C48150 !important;\n  padding: 17px 99px;\n  border-radius: 10px;\n  word-spacing: 1px;\n  letter-spacing: 1px;\n  font-size: 31px;\n  text-decoration: none;\n  border: 1px solid #C48150;\n}\n\n.asdsadYY2 {\n  margin: 0 auto;\n  background-color: #E2F0FE;\n  color: #689BEB !important;\n  padding: 17px 99px;\n  border-radius: 10px;\n  word-spacing: 1px;\n  letter-spacing: 1px;\n  font-size: 31px;\n  text-decoration: none;\n  border: 1px solid #689BEB;\n}\n\n.col-6 p {\n  margin-bottom: 6px;\n  font-size: 15px;\n  text-align: left;\n}\n\n.lendBtnInModal {\n  margin: 0 auto;\n  margin-top: 24px;\n  background-color: #E2F0FE;\n  color: #689BEB !important;\n  padding: 2px 23px;\n  border-radius: 10px;\n  word-spacing: 1px;\n  letter-spacing: 1px;\n  font-size: 22px;\n  text-decoration: none;\n  border: 1px solid #689BEB;\n}\n\n.borrowBtnInModal {\n  margin: 0 auto;\n  margin-top: 24px;\n  background-color: #FEDBBD;\n  color: #C48150 !important;\n  padding: 2px 23px;\n  border-radius: 10px;\n  word-spacing: 1px;\n  letter-spacing: 1px;\n  font-size: 22px;\n  text-decoration: none;\n  border: 1px solid #C48150;\n}\n\n.makeBold {\n  font-weight: 700;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFya2V0cGxhY2UvbWFya2V0cGxhY2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxVQUFVO0VBQ1YsYUFBYTtBQUNmOztBQUVBLG1DQUFtQzs7QUFDbkM7RUFDRSxXQUFXO0VBQ1gsY0FBYztFQUNkLFdBQVc7QUFDYjs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFHQTtFQUNFLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsV0FBVztFQUNYLHlCQUF5QjtFQUN6QixjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixvQkFBb0I7RUFDcEIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxTQUFTO0FBQ1g7O0FBR0E7RUFDRSxVQUFVO0VBQ1YsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7O0FBR0E7RUFDRSxtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsU0FBUztBQUNYOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFFBQVE7RUFDUixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLE1BQU07RUFDTixPQUFPO0VBQ1AsUUFBUTtFQUNSLFNBQVM7RUFDVCxzQkFBc0I7RUFFdEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLFdBQVc7RUFDWCxTQUFTO0VBQ1QsV0FBVztFQUNYLHVCQUF1QjtFQUV2QixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsbUNBQW1DO0VBRW5DLDJCQUEyQjtBQUM3Qjs7QUFFQSxvQkFBb0I7O0FBQ3BCO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLG1DQUFtQztFQUNuQyxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxzQ0FBc0M7RUFDdEMsWUFBWTtFQUNaLHVDQUF1QztFQUN2QyxNQUFNO0VBQ04sT0FBTztFQUNQLFFBQVE7RUFDUixTQUFTO0VBQ1QsdUJBQXVCO0VBQ3ZCLGtDQUFrQztFQUNsQyxVQUFVO0VBQ1Ysb0ZBQW9GO0VBQ3BGLGVBQWU7RUFDZiwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCxlQUFlO0VBQ2YsWUFBWTtFQUNaLHdDQUFnQztVQUFoQyxnQ0FBZ0M7RUFDaEMsb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UsY0FBYztFQUNkLHlCQUF5QjtFQUN6Qix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixxQkFBcUI7RUFDckIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsY0FBYztFQUNkLHlCQUF5QjtFQUN6Qix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixxQkFBcUI7RUFDckIseUJBQXlCO0FBQzNCOztBQUlBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtFQUN6Qix5QkFBeUI7RUFDekIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixxQkFBcUI7RUFDckIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtFQUNoQix5QkFBeUI7RUFDekIseUJBQXlCO0VBQ3pCLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YscUJBQXFCO0VBQ3JCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQiIsImZpbGUiOiJzcmMvYXBwL21hcmtldHBsYWNlL21hcmtldHBsYWNlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29sLTQge1xuICB3aWR0aDogNTAlO1xufVxuXG4uY29sdW1uIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiAyNSU7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbi8qIENsZWFyIGZsb2F0cyBhZnRlciB0aGUgY29sdW1ucyAqL1xuLnJvdzphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IHRhYmxlO1xuICBjbGVhcjogYm90aDtcbn1cblxuKiB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cblxuLmJvcmRldHl5IHtcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JleTtcbiAgbWFyZ2luOiA4cHggMjRweDtcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgcGFkZGluZzogMTRweCAwO1xufVxuXG4uYm9ycm93YnRuIHtcbiAgd2lkdGg6IDEzNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkVEQkJEO1xuICBjb2xvcjogI0M0ODE1MDtcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgcGFkZGluZzogNXB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIG1hcmdpbi10b3A6IC0ycHg7XG4gIGZsb2F0OiByaWdodDtcbiAgbWFyZ2luLXJpZ2h0OiAxOXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi5sZW5kZEJ0biB7XG4gIHdpZHRoOiA5M3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTJGMEZFO1xuICBjb2xvcjogIzY4OUJFQjtcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgcGFkZGluZzogNXB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIG1hcmdpbi10b3A6IC0zcHg7XG4gIGZsb2F0OiByaWdodDtcbiAgbWFyZ2luLXJpZ2h0OiAxOXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5hc2RzZGpraCB7XG4gIHdpZHRoOiAxMzBweDtcbiAgYm9yZGVyLXJhZGl1czogMTEzcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDEycHg7XG4gIHRvcDogMTVweDtcbn1cblxuXG4uYXNkamhzYWRoVSB7XG4gIHdpZHRoOiA1MiU7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbWFyZ2luLXRvcDogMTNweDtcbn1cblxuXG4ubWFpbnRpdGxlIHtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgZm9udC1zaXplOiA0MXB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbWFyZ2luOiAwO1xufVxuXG4uc3dpdGNoIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiA2MHB4O1xuICBoZWlnaHQ6IDM0cHg7XG59XG5cbi5zd2l0Y2ggaW5wdXQge1xuICBvcGFjaXR5OiAwO1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xufVxuXG4uc2xpZGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAuNHM7XG4gIHRyYW5zaXRpb246IC40cztcbn1cblxuLnNsaWRlcjpiZWZvcmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGhlaWdodDogMjZweDtcbiAgd2lkdGg6IDI2cHg7XG4gIGxlZnQ6IDRweDtcbiAgYm90dG9tOiA0cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAtd2Via2l0LXRyYW5zaXRpb246IC40cztcbiAgdHJhbnNpdGlvbjogLjRzO1xufVxuXG5pbnB1dDpjaGVja2VkKy5zbGlkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjE5NkYzO1xufVxuXG5pbnB1dDpmb2N1cysuc2xpZGVyIHtcbiAgYm94LXNoYWRvdzogMCAwIDFweCAjMjE5NkYzO1xufVxuXG5pbnB1dDpjaGVja2VkKy5zbGlkZXI6YmVmb3JlIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNnB4KTtcbn1cblxuLyogUm91bmRlZCBzbGlkZXJzICovXG4uc2xpZGVyLnJvdW5kIHtcbiAgYm9yZGVyLXJhZGl1czogMzRweDtcbn1cblxuLnNsaWRlci5yb3VuZDpiZWZvcmUge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbiNvdmVybGF5IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICAvKiBTaXQgb24gdG9wIG9mIHRoZSBwYWdlIGNvbnRlbnQgKi9cbiAgZGlzcGxheTogbm9uZTtcbiAgLyogSGlkZGVuIGJ5IGRlZmF1bHQgKi9cbiAgd2lkdGg6IDEwMCU7XG4gIC8qIEZ1bGwgd2lkdGggKGNvdmVyIHRoZSB3aG9sZSBwYWdlKSAqL1xuICBoZWlnaHQ6IDEwMCU7XG4gIC8qIEZ1bGwgaGVpZ2h0IChjb3ZlciB0aGUgd2hvbGUgcGFnZSkgKi9cbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgLyogQmxhY2sgYmFja2dyb3VuZCB3aXRoIG9wYWNpdHkgKi9cbiAgei1pbmRleDogMjtcbiAgLyogU3BlY2lmeSBhIHN0YWNrIG9yZGVyIGluIGNhc2UgeW91J3JlIHVzaW5nIGEgZGlmZmVyZW50IG9yZGVyIGZvciBvdGhlciBlbGVtZW50cyAqL1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIC8qIEFkZCBhIHBvaW50ZXIgb24gaG92ZXIgKi9cbn1cblxuI3RleHQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIGZvbnQtc2l6ZTogNTBweDtcbiAgY29sb3I6IHdoaXRlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuXG4uYXNkaGFpc2hnZGEge1xuICBtYXJnaW46IDAgYXV0bztcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZFREJCRDtcbiAgY29sb3I6ICNDNDgxNTAgIWltcG9ydGFudDtcbiAgcGFkZGluZzogMTdweCA5OXB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICB3b3JkLXNwYWNpbmc6IDFweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgZm9udC1zaXplOiAzMXB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNDNDgxNTA7XG59XG5cbi5hc2RzYWRZWTIge1xuICBtYXJnaW46IDAgYXV0bztcbiAgYmFja2dyb3VuZC1jb2xvcjogI0UyRjBGRTtcbiAgY29sb3I6ICM2ODlCRUIgIWltcG9ydGFudDtcbiAgcGFkZGluZzogMTdweCA5OXB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICB3b3JkLXNwYWNpbmc6IDFweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgZm9udC1zaXplOiAzMXB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM2ODlCRUI7XG59XG5cblxuXG4uY29sLTYgcCB7XG4gIG1hcmdpbi1ib3R0b206IDZweDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4ubGVuZEJ0bkluTW9kYWwge1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWFyZ2luLXRvcDogMjRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0UyRjBGRTtcbiAgY29sb3I6ICM2ODlCRUIgIWltcG9ydGFudDtcbiAgcGFkZGluZzogMnB4IDIzcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHdvcmQtc3BhY2luZzogMXB4O1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICBmb250LXNpemU6IDIycHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgYm9yZGVyOiAxcHggc29saWQgIzY4OUJFQjtcbn1cblxuLmJvcnJvd0J0bkluTW9kYWwge1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWFyZ2luLXRvcDogMjRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZFREJCRDtcbiAgY29sb3I6ICNDNDgxNTAgIWltcG9ydGFudDtcbiAgcGFkZGluZzogMnB4IDIzcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHdvcmQtc3BhY2luZzogMXB4O1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICBmb250LXNpemU6IDIycHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgYm9yZGVyOiAxcHggc29saWQgI0M0ODE1MDtcbn1cblxuLm1ha2VCb2xkIHtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/marketplace/marketplace.component.ts":
/*!******************************************************!*\
  !*** ./src/app/marketplace/marketplace.component.ts ***!
  \******************************************************/
/*! exports provided: MarketplaceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarketplaceComponent", function() { return MarketplaceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _nft_services_nft_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../nft/services/nft.service */ "./src/app/nft/services/nft.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _common_services_web3_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/services/web3.service */ "./src/app/common/services/web3.service.ts");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/data.service */ "./src/app/services/data.service.ts");






let MarketplaceComponent = class MarketplaceComponent {
    constructor(nftService, dataS, snackBar, web3Service) {
        this.nftService = nftService;
        this.dataS = dataS;
        this.snackBar = snackBar;
        this.web3Service = web3Service;
        this.test = true;
        this.btnaction = 'Lend';
        this.t_lend = true;
        this.t_borrow = false;
        this.mintStatus = false;
        this.dataS.nftData().subscribe(data => {
            console.log(data);
            this.data = data['data'];
        });
    }
    ngOnInit() {
        this.on();
        this.user();
    }
    lend(data) {
        this.lendData = data;
        if (this.lendData) {
            $('#lend').modal('show');
        }
    }
    applyForLoan(data) {
        this.showWhrDetailsbr(data);
        this.borrowData = data;
        this.whrdd = data;
        if (this.borrowData) {
            $('#borrow').modal('show');
        }
    }
    checkClicked(val) {
        this.test = !val;
        console.log(this.test);
        if (this.test === false) {
            this.t_borrow = true;
            this.t_lend = false;
        }
        else {
            this.t_lend = true;
            this.t_borrow = false;
        }
    }
    borrow() {
        this.test = false;
        this.t_borrow = true;
        this.t_lend = false;
    }
    lendddd() {
        this.test = true;
        this.t_lend = true;
        this.t_borrow = false;
    }
    slend() {
        this.test = true;
        this.t_lend = true;
        this.t_borrow = false;
    }
    on() {
        document.getElementById("overlay").style.display = "block";
    }
    off() {
        document.getElementById("overlay").style.display = "none";
    }
    user() {
        this.userAddress = localStorage.getItem("userAccount");
        console.log("################## NFT #####", this.userAddress);
    }
    youGet(whrdd) {
        console.log(whrdd.loanamount);
        console.log(whrdd.interest);
        let rr = whrdd.loanAmount.replace(',', '');
        let yyy = whrdd.interest.replace(',', '');
        let y = Number(rr) + Number(yyy);
        return y;
    }
    whrDetails(h) {
        localStorage.setItem("sc", h.sc);
        this.nftService.getWhrDetails().then((data) => {
            this.whr = data;
            this.whr['picture'] = h.picture;
            this.whr['commodity'] = h.commodity;
            console.log(data);
        });
        this.nftService.balanceOf().then((data) => {
            console.log(data);
            this.balanceOf = data;
        });
        this.nftService.totalCal().then((data) => {
            console.log(data);
            this.totalCal = data / Math.pow(10, 18);
        });
        this.nftService.totalInt().then((data) => {
            this.totalInt = data / Math.pow(10, 18);
        });
        this.nftService.paused().then((data) => {
            this.paused = data;
            console.log('paused', data);
        });
        this.nftService.lenderAddress().then((data) => {
            this.lenderAddress = data;
            console.log('feeDepositor', this.lenderAddress);
        });
        this.nftService.repaymentAmount().then((data) => {
            this.repaymentAmount = data / Math.pow(10, 18);
        });
        this.nftService.loanAmount().then((data) => {
            this.loanAmount = data / Math.pow(10, 18);
            console.log('loanAmount', this.loanAmount);
        });
        this.nftService.totalSupply().then((totalSupply) => {
            this.totalSupply = totalSupply;
            if (this.totalSupply == 0) {
                this.mintStatus = true;
            }
            console.log('totalSupply', totalSupply, this.mintStatus);
        });
        this.nftService.owner().then((data) => {
            this.owner = data;
            console.log('owner', this.owner);
        });
        // this.userAddress = this.nftService.userAddress();
        // console.log(this.userAddress);
    }
    ownercheck() {
        this.nftService.owner().then((data) => {
            this.owner = data;
            console.log('owner check ', data, this.userAddress);
            if (data.match(this.userAddress))
                return true;
            else
                return false;
        });
    }
    showWhrDetails(h) {
        console.log(h);
        localStorage.setItem("sc", h.sc);
        this.whrDetails(h);
        this.whrdd = h;
        // window.location.href = '/sc';
        $('#msg').modal('show');
    }
    showWhrDetailsbr(h) {
        console.log(h);
        localStorage.setItem("sc", h.sc);
        this.whrDetails(h);
        this.whrdd = h;
        // window.location.href = '/sc';
        // $('#msg').modal('show');
    }
    borrowerWithdraw() {
        this.nftService.borrowerWithdraw().then((data) => {
            // this.whr=data;
            this.paused = data;
            $('#lendingSuccess').modal('show');
            console.log('data', data);
            this.tx = "https://ropsten.etherscan.io/tx/" + data["transactionHash"];
            this.linkToViewLending = data["transactionHash"];
            // this.snackBar.open('You review has been sent', '', {
            //   duration: 2000,
            // });
        });
    }
    lenderWithdraw() {
        this.nftService.lenderWithdraw().then((data) => {
            // this.whr=data;
            this.paused = data;
            $('#lendingSuccess').modal('show');
            console.log('data', data);
            this.tx = "https://ropsten.etherscan.io/tx/" + data["transactionHash"];
            this.linkToViewLending = data["transactionHash"];
            // this.snackBar.open('You review has been sent', '', {
            //   duration: 2000,
            // });
        });
    }
    sentEth(h) {
        let sc = localStorage.getItem("sc");
        console.log(sc, this.userAddress, (this.whr.ethprice * (70 / 100)).toString());
        this.nftService.transfer(sc, this.userAddress, ((this.whr.ethprice / 100) * (70 / 100)).toString()).then((data) => {
            // this.whr=data;
            this.paused = data;
            $('#lendingSuccess').modal('show');
            console.log('data', data);
            this.tx = "https://ropsten.etherscan.io/tx/" + data["transactionHash"];
            this.linkToViewLending = data["transactionHash"];
            // this.snackBar.open('You review has been sent', '', {
            //   duration: 2000,
            // });
        }).catch(err => {
            this.tx = err.message;
            $('#seccessmsg').modal('show');
        }
        // alert(err.message)
        );
    }
    repaymentEth() {
        let sc = localStorage.getItem("sc");
        console.log(sc, this.userAddress, (this.whr.ethprice * (70 / 100)).toString());
        this.nftService.transfer(sc, this.userAddress, ((this.whr.ethprice / 100) * (70 / 100)).toString()).then((data) => {
            // this.whr=data;
            console.log();
            $('#lendingSuccess').modal('show');
            console.log('data', data);
            this.tx = "https://ropsten.etherscan.io/tx/" + data["transactionHash"];
            this.linkToViewLending = data["transactionHash"];
        });
    }
    mint() {
        this.nftService.owner().then((data) => {
            this.nftService.mint(data).then((data) => {
                $('#lendingSuccess').modal('show');
                console.log('data', data);
                this.tx = "https://ropsten.etherscan.io/tx/" + data["transactionHash"];
                this.linkToViewLending = data["transactionHash"];
            });
        });
    }
    stringToint(str) {
        // console.log(str);
        let rr = str.replace(',', '');
        let n = Number(rr);
        return n;
    }
    getImageName(val) {
        let tt = val.replace('/', '').trim();
        let t = tt.replace(' ', '');
        console.log(t);
        return t;
    }
};
MarketplaceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-marketplace',
        template: __webpack_require__(/*! raw-loader!./marketplace.component.html */ "./node_modules/raw-loader/index.js!./src/app/marketplace/marketplace.component.html"),
        styles: [__webpack_require__(/*! ./marketplace.component.css */ "./src/app/marketplace/marketplace.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_nft_services_nft_service__WEBPACK_IMPORTED_MODULE_2__["NftService"],
        _services_data_service__WEBPACK_IMPORTED_MODULE_5__["dataService"],
        _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"], _common_services_web3_service__WEBPACK_IMPORTED_MODULE_4__["Web3Service"]])
], MarketplaceComponent);



/***/ }),

/***/ "./src/app/myloans/myloans.component.css":
/*!***********************************************!*\
  !*** ./src/app/myloans/myloans.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".asdhaishgda {\n  margin: 0 auto;\n  background-color: #0089FC;\n  color: white;\n  padding: 9px 36px;\n  border-radius: 40px;\n  word-spacing: 1px;\n  letter-spacing: 1px;\n  text-decoration: none;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXlsb2Fucy9teWxvYW5zLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0VBQ2QseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIscUJBQXFCO0FBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvbXlsb2Fucy9teWxvYW5zLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXNkaGFpc2hnZGEge1xuICBtYXJnaW46IDAgYXV0bztcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwODlGQztcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiA5cHggMzZweDtcbiAgYm9yZGVyLXJhZGl1czogNDBweDtcbiAgd29yZC1zcGFjaW5nOiAxcHg7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/myloans/myloans.component.ts":
/*!**********************************************!*\
  !*** ./src/app/myloans/myloans.component.ts ***!
  \**********************************************/
/*! exports provided: MyloansComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyloansComponent", function() { return MyloansComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MyloansComponent = class MyloansComponent {
    constructor() { }
    ngOnInit() {
    }
};
MyloansComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-myloans',
        template: __webpack_require__(/*! raw-loader!./myloans.component.html */ "./node_modules/raw-loader/index.js!./src/app/myloans/myloans.component.html"),
        styles: [__webpack_require__(/*! ./myloans.component.css */ "./src/app/myloans/myloans.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], MyloansComponent);



/***/ }),

/***/ "./src/app/nft/components/contract/contract.component.css":
/*!****************************************************************!*\
  !*** ./src/app/nft/components/contract/contract.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25mdC9jb21wb25lbnRzL2NvbnRyYWN0L2NvbnRyYWN0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/nft/components/contract/contract.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/nft/components/contract/contract.component.ts ***!
  \***************************************************************/
/*! exports provided: ContractComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContractComponent", function() { return ContractComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_nft_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/nft.service */ "./src/app/nft/services/nft.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _common_services_web3_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../common/services/web3.service */ "./src/app/common/services/web3.service.ts");





let ContractComponent = class ContractComponent {
    constructor(nftService, snackBar, web3Service) {
        this.nftService = nftService;
        this.snackBar = snackBar;
        this.web3Service = web3Service;
        this.mintStatus = false;
        this.data = [
            {
                "id": 0,
                "commodity": "Wheat",
                "picture": "../../../../assets/images/Wheat.jpg",
                "totalQtl": 3,
                "variety": "Normal",
                "location": "Maharastra, India",
                "sc": "0xCaf069A5C7C90546A66B96e2A17fbCe4Aea91cb8"
            }
        ];
    }
    ngOnInit() {
        this.user();
        // console.log('("################## sc', localStorage.getItem("sc") ? localStorage.getItem("sc") : '0x57F801F99c1a53aa9f124aE3c6662Dec9B5ddCA9');
        // this.alld();
    }
    user() {
        this.userAddress = localStorage.getItem("sc");
        console.log("################## NFT #####", this.userAddress);
    }
    whrDetails(h) {
        this.nftService.getWhrDetails().then((data) => {
            this.whr = data;
            this.whr['picture'] = h.picture;
            this.whr['sc'] = h.sc;
            this.whr['commodity'] = h.commodity;
            console.log(data);
            // this.balanceOf=balanceOf;
            // this.snackBar.open('You review has been sent', '', {
            //   duration: 2000,
            // });
        });
        this.nftService.balanceOf().then((data) => {
            // this.whr=data;
            console.log(data);
            this.balanceOf = data;
            // this.snackBar.open('You review has been sent', '', {
            //   duration: 2000,
            // });
        });
        this.nftService.totalCal().then((data) => {
            // this.whr=data; 
            console.log(data);
            this.totalCal = data / Math.pow(10, 18);
            // this.snackBar.open('You review has been sent', '', {
            //   duration: 2000,
            // });
        });
        this.nftService.totalInt().then((data) => {
            // this.whr=data;
            this.totalInt = data / Math.pow(10, 18);
            // this.snackBar.open('You review has been sent', '', {
            //   duration: 2000,
            // });
        });
        this.nftService.paused().then((data) => {
            // this.whr=data;
            this.paused = data;
            console.log('paused', data);
            // this.snackBar.open('You review has been sent', '', {
            //   duration: 2000,
            // });
        });
        this.nftService.lenderAddress().then((data) => {
            // this.whr=data;
            this.lenderAddress = data;
            console.log('feeDepositor', this.lenderAddress);
            // this.feeDepositor = data;
            // this.snackBar.open('You review has been sent', '', {
            //   duration: 2000,
            // });
        });
        this.nftService.repaymentAmount().then((data) => {
            // this.whr=data;
            this.repaymentAmount = data / Math.pow(10, 18);
            // this.snackBar.open('You review has been sent', '', {
            //   duration: 2000,
            // });
        });
        this.nftService.loanAmount().then((data) => {
            // this.whr=data;
            this.loanAmount = data / Math.pow(10, 18);
            // this.snackBar.open('You review has been sent', '', {
            //   duration: 2000,
            // });
        });
        this.nftService.totalSupply().then((totalSupply) => {
            this.totalSupply = totalSupply;
            if (this.totalSupply == 0) {
                this.mintStatus = true;
            }
            console.log('totalSupply', totalSupply, this.mintStatus);
        });
        this.userAddress = this.nftService.userAddress();
        console.log(this.userAddress);
        this.nftService.owner().then((data) => {
            this.owner = data;
            console.log('owner', this.owner);
        });
    }
    // alld() { 
    //   for (var i = 0; i <= this.data.lenght; i++) {
    //     this.whrAllDetails(this.data[i]);
    //   }
    // }
    // whrAllDetails(h) {
    //   console.log('asasas',h.sc);
    //   this.nftService.getScAdd(h.sc).then((data) => {
    //     this.nftService.getWhrDetails().then((data) => {
    //       h['data'] = data;
    //       h['picture'] = h.picture;
    //       h['commodity'] = h.commodity;
    //       console.log(data);
    //       // this.balanceOf=balanceOf;
    //       // this.snackBar.open('You review has been sent', '', {
    //       //   duration: 2000,
    //       // });
    //     });
    //     this.nftService.balanceOf().then((data) => {
    //       // this.whr=data;
    //       console.log(data);
    //       h['balanceOf'] = data;
    //       // this.snackBar.open('You review has been sent', '', {
    //       //   duration: 2000,
    //       // });
    //     });
    //     // this.nftService.totalCal().then((data) => {
    //     //   // this.whr=data; 
    //     //   console.log(data);
    //     //   this.whr['totalCal'] = data / Math.pow(10, 18);
    //     //   // this.snackBar.open('You review has been sent', '', {
    //     //   //   duration: 2000,
    //     //   // });
    //     // });
    //     // this.nftService.totalInt().then((data) => {
    //     //   // this.whr=data;
    //     //   this.whr['totalInt'] = data / Math.pow(10, 18);
    //     //   // this.snackBar.open('You review has been sent', '', {
    //     //   //   duration: 2000,
    //     //   // });
    //     // });
    //     // this.nftService.paused().then((data) => {
    //     //   // this.whr=data;
    //     //   this.whr['paused'] = data;
    //     //   console.log('paused', data);
    //     //   // this.snackBar.open('You review has been sent', '', {
    //     //   //   duration: 2000,
    //     //   // });
    //     // });
    //     // this.nftService.lenderAddress().then((data) => {
    //     //   // this.whr=data;
    //     //   this.whr['lenderAddress'] = data;
    //     //   console.log('feeDepositor', this.lenderAddress);
    //     //   // this.feeDepositor = data;
    //     //   // this.snackBar.open('You review has been sent', '', {
    //     //   //   duration: 2000,
    //     //   // });
    //     // });
    //     // this.nftService.repaymentAmount().then((data) => {
    //     //   // this.whr=data;
    //     //   this.whr['repaymentAmount'] = data / Math.pow(10, 18);
    //     //   // this.snackBar.open('You review has been sent', '', {
    //     //   //   duration: 2000,
    //     //   // });
    //     // });
    //     // this.nftService.loanAmount().then((data) => {
    //     //   // this.whr=data;
    //     //   this.whr['loanAmount'] = data / Math.pow(10, 18);
    //     //   // this.snackBar.open('You review has been sent', '', {
    //     //   //   duration: 2000,
    //     //   // });
    //     // });
    //     // this.nftService.totalSupply().then((totalSupply) => {
    //     //   this.whr['totalSupply'] = totalSupply;
    //     //   if (this.totalSupply == 0) {
    //     //     this.whr['mintStatus'] = true;
    //     //   }
    //     //   console.log('totalSupply', totalSupply, this.mintStatus);
    //     // });
    //     // this.whr['userAddress'] = this.nftService.userAddress();
    //   });
    // }
    mintShatusCheck(h) {
        // console.log("mint h.sc",h.sc);
        // localStorage.getItem("sc")
        this.nftService.totalSupply().then((totalSupply) => {
            this.totalSupply = totalSupply;
            if (this.totalSupply == 0) {
                console.log("mint");
                return true;
            }
            else {
                console.log("already minted");
                return false;
            }
        });
    }
    showWhrDetails(h) {
        console.log(h);
        localStorage.setItem("sc", h.sc);
        this.whrDetails(h);
        // window.location.href = '/sc';
        $('#msg').modal('show');
    }
    borrowerWithdraw() {
        this.nftService.borrowerWithdraw().then((data) => {
            // this.whr=data;
            this.paused = data;
            // this.snackBar.open('You review has been sent', '', {
            //   duration: 2000,
            // });
        });
    }
    lenderWithdraw() {
        this.nftService.lenderWithdraw().then((data) => {
            // this.whr=data;
            this.paused = data;
            // this.snackBar.open('You review has been sent', '', {
            //   duration: 2000,
            // });
        });
    }
    sentEth() {
        let sc = localStorage.getItem("sc");
        console.log(sc, this.userAddress, (this.whr.ethprice * (70 / 100)).toString());
        this.nftService.transfer(sc, this.userAddress, (this.whr.ethprice * (70 / 100)).toString()).then((data) => {
            // this.whr=data;
            this.paused = data;
            // this.snackBar.open('You review has been sent', '', {
            //   duration: 2000,
            // });
        });
    }
    repaymentEth() {
        let sc = localStorage.getItem("sc");
        console.log(sc, this.userAddress, (this.whr.ethprice * (70 / 100)).toString());
        this.nftService.transfer(sc, this.userAddress, (this.whr.ethprice * (70 / 100)).toString()).then((data) => {
            // this.whr=data;
            this.paused = data;
            // this.snackBar.open('You review has been sent', '', {
            //   duration: 2000,
            // });
        });
    }
    mint(h) {
        localStorage.setItem("sc", h.sc);
        this.nftService.owner().then((data) => {
            this.nftService.mint(data).then((data) => {
                $('#seccessmsg').modal('show');
                console.log('data', data);
                this.tx = data["transactionHash"];
                // this.snackBar.open('New Token created', '', {
                //   duration: 2000,
                // });
            });
        });
    }
};
ContractComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-contract',
        template: __webpack_require__(/*! raw-loader!./contract.component.html */ "./node_modules/raw-loader/index.js!./src/app/nft/components/contract/contract.component.html"),
        styles: [__webpack_require__(/*! ./contract.component.css */ "./src/app/nft/components/contract/contract.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_nft_service__WEBPACK_IMPORTED_MODULE_2__["NftService"],
        _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"], _common_services_web3_service__WEBPACK_IMPORTED_MODULE_4__["Web3Service"]])
], ContractComponent);



/***/ }),

/***/ "./src/app/nft/components/nfts/nfts.component.css":
/*!********************************************************!*\
  !*** ./src/app/nft/components/nfts/nfts.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25mdC9jb21wb25lbnRzL25mdHMvbmZ0cy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/nft/components/nfts/nfts.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/nft/components/nfts/nfts.component.ts ***!
  \*******************************************************/
/*! exports provided: NftsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NftsComponent", function() { return NftsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_nft_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/nft.service */ "./src/app/nft/services/nft.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _common_services_web3_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../common/services/web3.service */ "./src/app/common/services/web3.service.ts");





let NftsComponent = class NftsComponent {
    constructor(nftService, snackBar, web3Service) {
        this.nftService = nftService;
        this.snackBar = snackBar;
        this.web3Service = web3Service;
        this.mintStatus = false;
        this.data = [
            {
                "id": 0,
                "commodity": "Wheat",
                "picture": "../../../../assets/images/Wheat.jpg",
                "totalQtl": 3,
                "variety": "Normal 2",
                "location": "Maharastra, India",
                "sc": "0xCaf069A5C7C90546A66B96e2A17fbCe4Aea91cb8"
            },
            {
                "id": 1,
                "commodity": "Oats",
                "picture": "../../../../assets/images/Oats.jpg",
                "totalQtl": 3,
                "variety": "Normal",
                "location": "Maharastra, India",
                "sc": "0xca48bfea13505472bacd1d6fdf237a28de939b4d"
            },
            {
                "id": 2,
                "commodity": "Corn",
                "picture": "../../../../assets/images/Corn.jpg",
                "totalQtl": 2,
                "variety": "Corn 2",
                "location": "Maharastra, India",
                "sc": "0xca48bfea13505472bacd1d6fdf237a28de939b4d"
            },
            {
                "id": 3,
                "commodity": "Barley",
                "picture": "../../../../assets/images/Barley.jpg",
                "totalQtl": 2,
                "variety": "Normal",
                "location": "Maharastra, India",
                "sc": "0xca48bfea13505472bacd1d6fdf237a28de939b4d"
            },
            {
                "id": 4,
                "commodity": "Sorghum",
                "picture": "../../../../assets/images/Sorghum.jpg",
                "totalQtl": 2,
                "variety": "Normal",
                "location": "Maharastra, India",
                "sc": "0xca48bfea13505472bacd1d6fdf237a28de939b4d"
            },
            {
                "id": 5,
                "commodity": "Rye",
                "picture": "../../../../assets/images/Rye.jpg",
                "totalQtl": 3,
                "variety": "Normal",
                "location": "Maharastra, India",
                "sc": "0xca48bfea13505472bacd1d6fdf237a28de939b4d"
            },
            {
                "id": 6,
                "commodity": "Amaranth",
                "picture": "../../../../assets/images/Amaranth.jpg",
                "totalQtl": 3,
                "variety": "Normal",
                "location": "Maharastra, India",
                "sc": "0xca48bfea13505472bacd1d6fdf237a28de939b4d"
            },
            {
                "id": 7,
                "commodity": "Millet",
                "picture": "../../../../assets/images/Millet.jpg",
                "totalQtl": 3,
                "variety": "Normal",
                "location": "Maharastra, India",
                "sc": "0xca48bfea13505472bacd1d6fdf237a28de939b4d"
            },
            {
                "id": 8,
                "commodity": "Triticale",
                "picture": "../../../../assets/images/Triticale.jpg",
                "totalQtl": 2,
                "variety": "Normal",
                "location": "Maharastra, India",
                "sc": "0xca48bfea13505472bacd1d6fdf237a28de939b4d"
            },
            {
                "id": 9,
                "commodity": "Buckwheat",
                "picture": "../../../../assets/images/Buckwheat.jpg",
                "totalQtl": 3,
                "variety": "Buckwheat",
                "location": "Maharastra, India",
                "sc": "0xca48bfea13505472bacd1d6fdf237a28de939b4d"
            },
            {
                "id": 10,
                "commodity": "Quinoa",
                "picture": "../../../../assets/images/Quinoa.jpg",
                "totalQtl": 2,
                "variety": "Quinoa",
                "location": "Maharastra, India",
                "sc": "0xca48bfea13505472bacd1d6fdf237a28de939b4d"
            },
            {
                "id": 11,
                "commodity": "Teff",
                "picture": "../../../../assets/images/Teff.jpg",
                "totalQtl": 3,
                "variety": "Teff",
                "location": "Maharastra, India",
                "sc": "0xca48bfea13505472bacd1d6fdf237a28de939b4d"
            }
        ];
    }
    ngOnInit() {
        this.user();
        console.log('("################## sc', localStorage.getItem("sc") ? localStorage.getItem("sc") : '0x57F801F99c1a53aa9f124aE3c6662Dec9B5ddCA9');
    }
    user() {
        this.userAddress = localStorage.getItem("sc");
        console.log("################## NFT #####", this.userAddress);
    }
    whrDetails(h) {
        this.nftService.getWhrDetails().then((data) => {
            this.whr = data;
            this.whr['picture'] = h.picture;
            this.whr['commodity'] = h.commodity;
            console.log(data);
            // this.balanceOf=balanceOf;
            // this.snackBar.open('You review has been sent', '', {
            //   duration: 2000,
            // });
        });
        this.nftService.balanceOf().then((data) => {
            // this.whr=data;
            console.log(data);
            this.balanceOf = data;
            // this.snackBar.open('You review has been sent', '', {
            //   duration: 2000,
            // });
        });
        this.nftService.totalCal().then((data) => {
            // this.whr=data; 
            console.log(data);
            this.totalCal = data / Math.pow(10, 18);
            // this.snackBar.open('You review has been sent', '', {
            //   duration: 2000,
            // });
        });
        this.nftService.totalInt().then((data) => {
            // this.whr=data;
            this.totalInt = data / Math.pow(10, 18);
            // this.snackBar.open('You review has been sent', '', {
            //   duration: 2000,
            // });
        });
        this.nftService.paused().then((data) => {
            // this.whr=data;
            this.paused = data;
            console.log('paused', data);
            // this.snackBar.open('You review has been sent', '', {
            //   duration: 2000,
            // });
        });
        this.nftService.lenderAddress().then((data) => {
            // this.whr=data;
            this.lenderAddress = data;
            console.log('feeDepositor', this.lenderAddress);
            // this.feeDepositor = data;
            // this.snackBar.open('You review has been sent', '', {
            //   duration: 2000,
            // });
        });
        this.nftService.repaymentAmount().then((data) => {
            // this.whr=data;
            this.repaymentAmount = data / Math.pow(10, 18);
            // this.snackBar.open('You review has been sent', '', {
            //   duration: 2000,
            // });
        });
        this.nftService.loanAmount().then((data) => {
            // this.whr=data;
            this.loanAmount = data / Math.pow(10, 18);
            // this.snackBar.open('You review has been sent', '', {
            //   duration: 2000,
            // });
        });
        this.nftService.totalSupply().then((totalSupply) => {
            this.totalSupply = totalSupply;
            if (this.totalSupply == 0) {
                this.mintStatus = true;
            }
            console.log('totalSupply', totalSupply, this.mintStatus);
        });
        this.nftService.owner().then((data) => {
            this.owner = data;
            console.log('owner', this.owner);
        });
        this.userAddress = this.nftService.userAddress();
        console.log(this.userAddress);
    }
    showWhrDetails(h) {
        console.log(h);
        localStorage.setItem("sc", h.sc);
        this.whrDetails(h);
        // window.location.href = '/sc';
        $('#msg').modal('show');
    }
    borrowerWithdraw() {
        this.nftService.borrowerWithdraw().then((data) => {
            // this.whr=data;
            this.paused = data;
            $('#seccessmsg').modal('show');
            console.log('data', data);
            this.tx = "Transactiondata " + data["transactionHash"] + "completed successfully.. ";
            // this.snackBar.open('You review has been sent', '', {
            //   duration: 2000,
            // });
        });
    }
    lenderWithdraw() {
        this.nftService.lenderWithdraw().then((data) => {
            // this.whr=data;
            this.paused = data;
            $('#seccessmsg').modal('show');
            console.log('data', data);
            this.tx = "Transactiondata " + data["transactionHash"] + "completed successfully.. ";
            // this.snackBar.open('You review has been sent', '', {
            //   duration: 2000,
            // });
        });
    }
    sentEth() {
        let sc = localStorage.getItem("sc");
        console.log(sc, this.userAddress, (this.whr.ethprice * (70 / 100)).toString());
        this.nftService.transfer(sc, this.userAddress, ((this.whr.ethprice / 100) * (70 / 100)).toString()).then((data) => {
            // this.whr=data;
            this.paused = data;
            console.log('data', data);
            this.tx = "Transactiondata " + data["transactionHash"] + "completed successfully.. ";
            $('#seccessmsg').modal('show');
            // this.snackBar.open('You review has been sent', '', {
            //   duration: 2000,
            // });
        }).catch(err => {
            this.tx = err.message;
            $('#seccessmsg').modal('show');
        }
        // alert(err.message)
        );
    }
    repaymentEth() {
        let sc = localStorage.getItem("sc");
        console.log(sc, this.userAddress, (this.whr.ethprice * (70 / 100)).toString());
        this.nftService.transfer(sc, this.userAddress, ((this.whr.ethprice / 100) * (70 / 100)).toString()).then((data) => {
            // this.whr=data;
            this.paused = data;
            $('#seccessmsg').modal('show');
            console.log('data', data);
            this.tx = "Transactiondata " + data["transactionHash"] + "completed successfully.. ";
            // this.snackBar.open('You review has been sent', '', {
            //   duration: 2000,
            // });
        });
    }
    mint() {
        this.nftService.owner().then((data) => {
            this.nftService.mint(data).then((data) => {
                $('#seccessmsg').modal('show');
                console.log('data', data);
                this.tx = "Transactiondata " + data["transactionHash"] + "completed successfully.. ";
            });
        });
    }
};
NftsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-nfts',
        template: __webpack_require__(/*! raw-loader!./nfts.component.html */ "./node_modules/raw-loader/index.js!./src/app/nft/components/nfts/nfts.component.html"),
        styles: [__webpack_require__(/*! ./nfts.component.css */ "./src/app/nft/components/nfts/nfts.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_nft_service__WEBPACK_IMPORTED_MODULE_2__["NftService"],
        _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"], _common_services_web3_service__WEBPACK_IMPORTED_MODULE_4__["Web3Service"]])
], NftsComponent);



/***/ }),

/***/ "./src/app/nft/nft.module.ts":
/*!***********************************!*\
  !*** ./src/app/nft/nft.module.ts ***!
  \***********************************/
/*! exports provided: NftModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NftModule", function() { return NftModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _components_nfts_nfts_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/nfts/nfts.component */ "./src/app/nft/components/nfts/nfts.component.ts");
/* harmony import */ var _components_contract_contract_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/contract/contract.component */ "./src/app/nft/components/contract/contract.component.ts");









let NftModule = class NftModule {
};
NftModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_components_nfts_nfts_component__WEBPACK_IMPORTED_MODULE_7__["NftsComponent"], _components_contract_contract_component__WEBPACK_IMPORTED_MODULE_8__["ContractComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatGridListModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"]
        ],
        providers: []
    })
], NftModule);



/***/ }),

/***/ "./src/app/nft/services/nft.service.ts":
/*!*********************************************!*\
  !*** ./src/app/nft/services/nft.service.ts ***!
  \*********************************************/
/*! exports provided: NftService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NftService", function() { return NftService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _common_services_web3_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/services/web3.service */ "./src/app/common/services/web3.service.ts");



let NftService = class NftService {
    constructor(web3Service) {
        this.web3Service = web3Service;
    }
    getWhrDetails() {
        return this.web3Service.abi.methods.whr().call();
    }
    balanceOf() {
        return this.web3Service.abi.methods.balanceOf(this.web3Service.getAccount()).call();
    }
    baseURL() {
        return this.web3Service.abi.methods.baseURL().call();
    }
    feeDepositor() {
        return this.web3Service.abi.methods.feeDepositor().call();
    }
    lenderAddress() {
        return this.web3Service.abi.methods.lenderAddress().call();
    }
    loanAmount() {
        return this.web3Service.abi.methods.loanAmount().call();
    }
    loanAmtToPay() {
        return this.web3Service.abi.methods.loanAmtToPay().call();
    }
    name() {
        return this.web3Service.abi.methods.name().call();
    }
    owner() {
        return this.web3Service.abi.methods.owner().call();
    }
    paused() {
        return this.web3Service.abi.methods.paused().call();
    }
    repaymentAmount() {
        return this.web3Service.abi.methods.repaymentAmount().call();
    }
    totalInt() {
        return this.web3Service.abi.methods.totalInt().call();
    }
    totalCal() {
        return this.web3Service.abi.methods.totalCal().call();
    }
    borrowerWithdraw() {
        return this.web3Service.abi.methods.borrowerWithdraw().send({ from: this.web3Service.getAccount() });
    }
    lenderWithdraw() {
        console.log('getAccount', this.web3Service.getAccount());
        return this.web3Service.abi.methods.lenderWithdraw().send({ from: this.web3Service.getAccount() });
    }
    userAddress() {
        console.log('getAccount', this.web3Service.getAccount());
        return this.web3Service.getAccount();
    }
    transfer(to, from, value) {
        return this.web3Service.trasfer(to, from, value).send({ from: this.web3Service.getAccount() });
    }
    mint(address) {
        return this.web3Service.abi.methods.mint(address).send({ from: this.web3Service.getAccount() });
    }
    totalSupply() {
        // this.web3Service.sc = sc;
        return this.web3Service.abi.methods.totalSupply().call();
    }
};
NftService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_common_services_web3_service__WEBPACK_IMPORTED_MODULE_2__["Web3Service"]])
], NftService);



/***/ }),

/***/ "./src/app/services/data.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/data.service.ts ***!
  \******************************************/
/*! exports provided: dataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dataService", function() { return dataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let dataService = class dataService {
    constructor(http) {
        this.http = http;
        this.baseURL = '';
        this.baseURL = 'https://uat-backend.whrrl.in/';
    }
    nftData() {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers = headers.append('Content-Type', 'application/json');
        return this.http.get(this.baseURL + 'nft/nftData', { headers: headers });
    }
};
dataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], dataService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
const ABI = __webpack_require__(/*! ../../build_ropsten/contracts/nftToken.json */ "./build_ropsten/contracts/nftToken.json");
const environment = {
    production: false,
    networkID: 3,
    RPCProvider: 'http://localhost:7545',
    RPCWSSProvider: 'ws://localhost:7545',
    ABI
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.log(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/ashishgahlawat/Nothing/Projects/Whrrl_F/whrrl-master/src/main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 4:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map