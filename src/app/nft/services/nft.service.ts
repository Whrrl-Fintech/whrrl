import { Injectable } from '@angular/core';
import { Web3Service } from '../../common/services/web3.service';

@Injectable({
  providedIn: 'root'
})
export class NftService {

  constructor(private web3Service: Web3Service) {
  }

  getWhrDetails(): Promise<any> {
    return this.web3Service.abi.methods.whr().call();
  }

  balanceOf(): Promise<any> {
    return this.web3Service.abi.methods.balanceOf(this.web3Service.getAccount()).call();
  }

  baseURL(): Promise<any> {
    return this.web3Service.abi.methods.baseURL().call();
  }

  feeDepositor(): Promise<any> {
    return this.web3Service.abi.methods.feeDepositor().call();
  }



  lenderAddress(): Promise<any> {
    return this.web3Service.abi.methods.lenderAddress().call();
  }

  loanAmount(): Promise<any> {
    return this.web3Service.abi.methods.loanAmount().call();
  }

  loanAmtToPay(): Promise<any> {
    return this.web3Service.abi.methods.loanAmtToPay().call();
  }

  name(): Promise<any> {
    return this.web3Service.abi.methods.name().call();
  }


  owner(): Promise<any> {
    return this.web3Service.abi.methods.owner().call();
  }

  paused(): Promise<any> {
    return this.web3Service.abi.methods.paused().call();
  }


  repaymentAmount(): Promise<any> {
    return this.web3Service.abi.methods.repaymentAmount().call();
  }

  totalInt(): Promise<any> {
    return this.web3Service.abi.methods.totalInt().call();
  }

  totalCal(): Promise<any> {
    return this.web3Service.abi.methods.totalCal().call();
  }

  borrowerWithdraw(): Promise<any> {
    return this.web3Service.abi.methods.borrowerWithdraw().send({ from: this.web3Service.getAccount() });
  }

  lenderWithdraw(): Promise<any> {
    console.log('getAccount', this.web3Service.getAccount());
    return this.web3Service.abi.methods.lenderWithdraw().send({ from: this.web3Service.getAccount() });
  }

  userAddress(): String {
    console.log('getAccount', this.web3Service.getAccount());
    return this.web3Service.getAccount();
  }


  transfer(to, from, value): Promise<any> {
    return this.web3Service.trasfer(to, from, value).send({ from: this.web3Service.getAccount() });
  }

  mint(address): Promise<any> {
    return this.web3Service.abi.methods.mint(address).send({ from: this.web3Service.getAccount() });
  }

  totalSupply(): Promise<any> {
    return this.web3Service.abi.methods.totalSupply().call();
  }
}
