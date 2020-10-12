import { Component, Input, OnInit } from '@angular/core';
import { NftService } from '../nft/services/nft.service';
import { MatSnackBar } from '@angular/material';
import { Web3Service } from '../common/services/web3.service';
import { dataService } from '../services/data.service';

declare var $: any;

@Component({
  selector: 'app-marketplace',
  templateUrl: './marketplace.component.html',
  styleUrls: ['./marketplace.component.css']
})
export class MarketplaceComponent implements OnInit {
  lendData: any;
  data: any;
  borrowData: any;
  test: Boolean = true;
  btnaction = 'Lend';
  t_lend: Boolean = true;
  t_borrow: Boolean = false;
  whr: any;
  whrdd: any;
  balanceOf: any;
  totalCal: any;
  totalInt: any;
  paused: any;
  repaymentAmount: any;
  loanAmount: any;
  feeDepositor: any;
  lenderAddress: any;
  // web3Service: any;
  userAddress: any;
  totalSupply: any;
  mintStatus: boolean = false;
  tx: any;
  owner: any;
  linkToViewLending: any;
  constructor(private nftService: NftService,
    private dataS: dataService,
    private snackBar: MatSnackBar, private web3Service: Web3Service) {
    this.dataS.nftData().subscribe(data => {
      console.log(data)
      this.data = data['data']
    })
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
    console.log(this.test)
    if (this.test === false) {
      this.t_borrow = true;
      this.t_lend = false;
    } else {
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
    console.log(whrdd.loanamount)
    console.log(whrdd.interest)
    let rr = whrdd.loanAmount.replace(',', '');
    let yyy = whrdd.interest.replace(',', '');

    let y = Number(rr) + Number(yyy);
    return y;
  }


  whrDetails(h) {
    localStorage.setItem("sc", h.sc)
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
        return true
      else
        return false
    });

  }
  showWhrDetails(h) {
    console.log(h);
    localStorage.setItem("sc", h.sc)
    this.whrDetails(h);
    this.whrdd = h;
    // window.location.href = '/sc';
    $('#msg').modal('show');
  }


  showWhrDetailsbr(h) {
    console.log(h);
    localStorage.setItem("sc", h.sc)
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
      this.tx = "https://ropsten.etherscan.io/tx/" + data["transactionHash"]
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
      this.tx = "https://ropsten.etherscan.io/tx/" + data["transactionHash"]
      this.linkToViewLending = data["transactionHash"];
      // this.snackBar.open('You review has been sent', '', {
      //   duration: 2000,
      // });
    });


  }


  sentEth(h) {
    let sc = localStorage.getItem("sc")
    console.log(sc, this.userAddress, (this.whr.ethprice * (70 / 100)).toString());

    this.nftService.transfer(sc, this.userAddress
      , ((this.whr.ethprice / 100) * (70 / 100)).toString()).then((data) => {
        // this.whr=data;
        this.paused = data;

        $('#lendingSuccess').modal('show');
        console.log('data', data);
        this.tx = "https://ropsten.etherscan.io/tx/" + data["transactionHash"]
        this.linkToViewLending = data["transactionHash"];
        // this.snackBar.open('You review has been sent', '', {
        //   duration: 2000,
        // });
      }).catch(err => {
        this.tx = err.message
        $('#seccessmsg').modal('show');
      }


        // alert(err.message)
      );
  }


  repaymentEth() {
    let sc = localStorage.getItem("sc")
    console.log(sc, this.userAddress, (this.whr.ethprice * (70 / 100)).toString());
    this.nftService.transfer(sc, this.userAddress
      , ((this.whr.ethprice / 100) * (70 / 100)).toString()).then((data) => {
        // this.whr=data;
        console.log();

        $('#lendingSuccess').modal('show');
        console.log('data', data);
        this.tx = "https://ropsten.etherscan.io/tx/" + data["transactionHash"]
        this.linkToViewLending = data["transactionHash"];
      });
  }

  mint() {
    this.nftService.owner().then((data) => {
      this.nftService.mint(data).then((data) => {
        $('#lendingSuccess').modal('show');
        console.log('data', data);
        this.tx = "https://ropsten.etherscan.io/tx/" + data["transactionHash"]
        this.linkToViewLending = data["transactionHash"];
      });
    });
  }

  stringToint(str) {
    // console.log(str);

    let rr = str.replace(',', '')
    let n = Number(rr)
    return n;
  }

  getImageName(val) {
    let tt = val.replace('/', '').trim();
    let t = tt.replace(' ','')
    console.log(t)
    return t;

  }
}
