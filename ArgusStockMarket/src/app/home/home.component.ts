import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import ls from "localstorage-slim";
import { BackService } from '../sl.service';
import {MatGridListModule} from '@angular/material/grid-list';

@Component({
  selector: 'app-home',
  templateUrl: './home1.component.html',
  styleUrls: ['./home.component.css'],
  
})
export class HomeComponent implements OnInit{

  selectedProname: string = '';
  stck :any = '';
  title = 'front';
  val$: any;
  stock = "";
  status$ = "";
  myForm!: FormGroup;
  email: any
  click = 0;
  price = 0;
  pl: any;
  
  stocknames : any = [
    { name: "HDFC Bank", sname: "hdb", proname:"NYSE:HDB" },
    { name: "ICICI Bank", sname: "ibn", proname:"NYSE:IBN" },
    { name: "Bank Of America", sname: "bac", proname:"NYSE:BAC" },
    { name: "Goldman Sachs", sname: "gs", proname:"NYSE:GS" },
    { name: "HSBC Holdings", sname: "hsbc", proname:"NYSE:HSBC" },
    { name: "Cisco Systems", sname: "csco", proname:"NASDAQ:CSCO"},
    { name: "AT & T Inc.", sname: "t", proname:"NYSE:T" },
    { name: "Duke Energy Corperations", sname: "duk", proname:"NYSE:DUK" },
    { name: "Vistara Corperation", sname: "vst", proname:"NYSE:VST" },
    { name: "Adobe Inc.", sname: "adbe", proname:"NASDAQ:ADBE" }]
  
    
  constructor(private backservice: BackService, private router: Router) {
  }

  ngOnInit(): void {
    
    this.myForm = new FormGroup({
    stock: new FormControl('Select Your Stock', [Validators.required, Validators.pattern("^[a-zA-Z ]*$")]),
    qty: new FormControl('--', [Validators.required, Validators.minLength(1)]),
    })
  }

  // ************************ SHOW PRICE FUNCTION ***********************************

  show_price(Form: FormGroup) {
    console.log("Before subscribe")
    console.log(this.stck);
    console.log("1")
    this.stock = Form.value.stock;
    console.log("2")

    console.log("3")
    const foundstock = this.stocknames.find((item:any) => item.name === this.stock);
    console.log(foundstock)
    console.log("4")
    this.selectedProname=foundstock?.proname
    console.log(this.selectedProname)
    console.log("5")
    this.backservice.getprice(this.stock).subscribe((res : any)=>
      {
        console.log("6")
        this.val$ = res;
        this.price = parseInt(this.val$["Global Quote"]["05. price"]) * 82.17;
      })
      console.log("7")
  }


// ************************** ADD USER BUYING FUNCTION *************************

  // add_userdetail(Form: FormGroup) {
  //   let pricef: any;
  //   console.log(typeof (Form.value.qty));
  //   const get = new Promise<any>((resolve, _reject) => {
  //     this.backservice.getprice(Form.value.stock).subscribe(
  //       {
  //         next: res => resolve(res)
  //       }
  //     )
  //   })
  //   get.then((value) => {
  //     this.val$ = value;
  //     pricef = Form.value.qty * parseInt(this.val$["Global Quote"]["05. price"]) * 82.17;
  //     const get1 = new Promise<any>((resolve, _reject) => {
  //       this.backservice.adduser(this.email, Form.value.stock, Form.value.qty, pricef).subscribe(
  //         {
  //           next: res => resolve(res)
  //         }
  //       )
  //     })
  //     get1.then(async(value1) => {
  //       if (value1["inres"] == "successfully updated") {
  //         const box1 = document.getElementById("alertnq");
  //         const el1 = document.createElement('div');
  //         el1.innerHTML = `<div class="alert alert-success alert-dismissible fade show" role="alert">
  //         Successfully buyed!!
  //        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  //      </div>`;
  //         box1?.append(el1);
  //         if (this.click == 1) {
  //           document.getElementById('forclickremove1')?.remove();
  //           document.getElementById('forclickremove2')?.remove();
  //           this.click = 0;
  //           this.status();
  //           this.myForm.reset();
  //         }
  //       } 
  //       else {
  //         const box2 = document.getElementById("alertnq");
  //         const el2 = document.createElement('div');
  //         el2.innerHTML = `<div class="alert alert-danger alert-dismissible fade show" role="alert">
  //         Enter correct name of stock
  //        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  //      </div>`;
  //         box2?.append(el2);
  //         Form.reset();
  //       }
  //     })
  //   });
  // }
 
  add_userdetail(Form: FormGroup) {
    let pricef: any;
    console.log(typeof Form.value.qty);
    this.backservice.getprice(Form.value.stock).subscribe((value: any) => {
      this.val$ = value;
      pricef = Form.value.qty * parseInt(this.val$["Global Quote"]["05. price"]) * 82.17;
      this.backservice.adduser(this.email, Form.value.stock, Form.value.qty, pricef).subscribe((value1: any) => {
        if (value1["inres"] == "successfully updated") {
          const box1 = document.getElementById("alertnq");
          const el1 = document.createElement('div');
          el1.innerHTML = `<div class="alert alert-success alert-dismissible fade show" role="alert">
            Successfully bought!!
           <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
         </div>`;
          box1?.append(el1);
          if (this.click == 1) {
            document.getElementById('forclickremove1')?.remove();
            document.getElementById('forclickremove2')?.remove();
            this.click = 0;
            this.status();
            this.myForm.reset();
          }
        }
        else {
          const box2 = document.getElementById("alertnq");
          const el2 = document.createElement('div');
          el2.innerHTML = `<div class="alert alert-danger alert-dismissible fade show" role="alert">
            Enter correct name of stock
           <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
         </div>`;
          box2?.append(el2);
          Form.reset();
        }
      });
    });
  }

  //*********************** GET THE STATUS OF USER BUYING FUNCTION *************************** 

  status() {
    this.backservice.getstatus(this.email).subscribe((value: any) => {
      if (this.click == 0) {
        console.log("get status (if) condition is called");
        const box = document.getElementById('stocklist');
        const box2 = document.getElementById('overall');
        const el3 = document.createElement('div');
        el3.setAttribute("id", "forclickremove1");
        const el4 = document.createElement('div');
        el4.setAttribute("id", "forclickremove2");
        for (const element of value["inddif"]) {
          let color = "";
          if (element['diff'] >= 0) {
            color = "success";
          } else {
            color = "danger";
          }
          const el = document.createElement('li');
          el.setAttribute("class", "list-group-item d-flex justify-content-between align-items-center");
          el.innerHTML = `${element['name']}
          <span class="badge bg-primary rounded-pill">${element['qty']}</span>
          <span class="badge bg-${color} rounded-pill">${element['diff']}</span>`;
          el3?.appendChild(el);
        }
        box?.appendChild(el3);
        console.log(value["P&L"]);
        const el2 = document.createElement('div');
        el2.setAttribute("class", "list-group-item d-flex justify-content-between align-items-center");
        if (parseInt(value["P&L"]) >= 0) {
          el2.innerHTML = `<div class="card opacity-75 text-bg-success mb-3 mx-auto" style="max-width: 24rem;">
            <div class="card-header">OVERALL</div>
            <div class="card-body">
              <h5 class="card-title">Profit of ${value["P&L"]}</h5>
            </div>
          </div>`;
        } else {
          el2.innerHTML = `<div class="card opacity-75 text-bg-danger mb-3 mx-auto" style="max-width: 24rem;">
            <div class="card-header">OVERALL</div>
            <div class="card-body">
              <h5 class="card-title">Loss of ${value["P&L"]}</h5>
            </div>
          </div>`;
        }
        el4?.append(el2);
        box2?.appendChild(el4);
        this.click = 1;
      } else {
        document.getElementById('forclickremove1')?.remove();
        document.getElementById('forclickremove2')?.remove();
        this.click = 0;
      }
    });
  }
  

// ****************************** SELL STOCK FUNCTION **********************************

sellstock(Form: FormGroup) {
  let color = "danger";
  let quote = "loss";
  this.backservice.sell(this.email, Form.value.stock, Form.value.qty).subscribe((value: any) => {
    if (value["pl"] != "Please enter correct name or qty") {
      this.pl = value["pl"];
      console.log(typeof value["pl"]);
      if (parseInt(this.pl) > 0) {
        color = "success";
        quote = "profit";
      }
      const box = document.getElementById('pl');
      const el = document.createElement('li');
      el.setAttribute("class", `list-group-item list-group-item-${color}`);
      el.innerHTML = `You have sold with a ${quote} of ${this.pl}`;
      box?.append(el);
      Form.reset();
      if (this.click == 1) {
        document.getElementById('forclickremove1')?.remove();
        document.getElementById('forclickremove2')?.remove();
        this.click = 0;
        this.status();
      }
    } else {
      const box1 = document.getElementById("alertnq");
      const el1 = document.createElement('div');
      el1.innerHTML = `<div class="alert alert-danger alert-dismissible fade show" role="alert">
        Please enter correct name or quantity
       <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
     </div>`;
      box1?.append(el1);
      Form.reset();
    }
  });
}


  // ********************** LOGOUT FUNCTION ***********************************
  
  logout() {
    ls.remove("#qwAs?.,s");
    ls.remove("qsc@1!%^36");
    this.router.navigateByUrl('/');
  }
}
