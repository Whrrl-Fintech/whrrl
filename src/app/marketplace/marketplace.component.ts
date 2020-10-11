import { Component, OnInit } from '@angular/core';

declare var $: any;
@Component({
  selector: 'app-marketplace',
  templateUrl: './marketplace.component.html',
  styleUrls: ['./marketplace.component.css']
})
export class MarketplaceComponent implements OnInit {
  lendData: any;
  borrowData: any;
  test: Boolean = true;
  btnaction = 'Lend';
  t_lend: Boolean = true;
  t_borrow: Boolean = false;
  data = [
    {
      name: "Loan Asked",
      bal: "2.55 ETH",
      quantity: "12400 KG"
    },
    {
      name: "Loan Asked",
      bal: "2.55 ETH",
      quantity: "12400 KG"
    },
    {
      name: "Loan Asked",
      bal: "2.55 ETH",
      quantity: "12400 KG"
    },
    {
      name: "Loan Asked",
      bal: "2.55 ETH",
      quantity: "12400 KG"
    },
    {
      name: "Loan Asked",
      bal: "2.55 ETH",
      quantity: "12400 KG"
    },
    {
      name: "Loan Asked",
      bal: "2.55 ETH",
      quantity: "12400 KG"
    },
    {
      name: "Loan Asked",
      bal: "2.55 ETH",
      quantity: "12400 KG"
    }
  ]
  constructor() { }

  ngOnInit() {
    this.on();
  }

  lend(data) {
    this.lendData = data;
    if (this.lendData) {
      $('#lend').modal('show');
    }
  }
  applyForLoan(data) {
    this.borrowData = data;
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
}
