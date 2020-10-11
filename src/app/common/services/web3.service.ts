import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from '../../../environments/environment';

declare let require: any;
declare let ethereum: any;
const Web3 = require('web3');

declare let window: any;

@Injectable({
  providedIn: 'root',
})
export class Web3Service {
  private web3: any;
  private accounts: string[];
  public ready = false;
  public abi;

  public accountsObservable = new Subject<string[]>();
  public sc: any;

  constructor() {
    this.bootstrapWeb3();
  }

  private async enableAccounts() {
    if (window.ethereum) {
      window.web3 = new Web3(ethereum);
      try {
        // Request account access if needed
        await ethereum.enable();
      } catch (error) {
        // User denied account access...
      }
    }
  }

  public bootstrapWeb3() {
    // Checking if Web3 has been injected by the browser (Mist/MetaMask)

    if (typeof window.web3 !== 'undefined') {
      // Use Mist/MetaMask's provider
      this.web3 = new Web3(new Web3(window.web3.currentProvider));
    } else {
      console.log('No web3? You should consider trying MetaMask!');

      // Hack to provide backwards compatibility for Truffle, which uses web3js 0.20.x
      Web3.providers.HttpProvider.prototype.sendAsync = Web3.providers.HttpProvider.prototype.send;
      // fallback - use your fallback strategy (local node / hosted node + in-dapp id mgmt / fail)
      this.web3 = new Web3(new Web3.providers.HttpProvider(environment.RPCProvider));

    }

    setInterval(this.refreshAccounts, 500);

    // check if privacy mode is activated and request access

    this.enableAccounts().then(() => {
      this.refreshAccounts();
    });


    this.abi = this.artifactsToContract(this.sc);
  }

  public artifactsToContract(sc) {
    if (this.web3) {
      const instance = new this.web3.eth.Contract(environment.ABI.abi,
        // '0x57F801F99c1a53aa9f124aE3c6662Dec9B5ddCA9');
        localStorage.getItem("sc") ? localStorage.getItem("sc") : '0x57F801F99c1a53aa9f124aE3c6662Dec9B5ddCA9');
      return instance;
    }
  }

  public getProvider() {
    return this.web3.currentProvider;
  }


  public trasfer(receiver, sender, value) {
    return this.web3.eth.sendTransaction({
      to: receiver, from: sender,
      value: this.web3.utils.toWei(value, "ether")
    })

  }



  public getAccount() {
    if (!this.accounts) {
      console.log('Couldn\'t get any accounts! Make sure your Ethereum client is configured correctly.');
      return null;
    }
    return this.accounts[0];
  }

  public refreshAccounts = () => {
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
          localStorage.setItem("userAccount", this.accounts[0])
          console.log('Observed new accounts', this.accounts);
        }

        this.ready = true;
      });
    }
  };
}
