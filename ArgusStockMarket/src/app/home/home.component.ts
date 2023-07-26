import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import ls from "localstorage-slim";
import { BackService } from '../sl.service';
import { waitForAsync } from '@angular/core/testing';
// import { widget, widget, widget } from 'tradingview-api';

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
  pl:number=0;
  prediction: any;
  temp :any
  currentDate:Date|any=null;
  currentmonth:Date|any=null;
  currentyear:Date|any=null;
  date:string='';
  quantity:number=0;
  stknm:string='';
  amount:number=0;
  uid:any;
  unm:any;
  ary:any;
  hidden:boolean=false;
  
  stocknames  = [
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

  s = [
    {title: "HDFC Bank Ltd.",proName: "NYSE:HDB"},
    {title: "ICICI Bank",proName: "NYSE:IBN"},
    {title: "Goldman Sachs",proName: "NYSE:GS"},
    {title: "Bank Of America",proName: "NYSE:BAC"},
    {title: "HSBC Holdings",proName: "NYSE:HSBC"},
    {title: "Cisco Systems",proName: "NASDAQ:CSCO"},
    {title: "AT & T Inc.",proName: "NYSE:T"},
    {title: "Duke Energy Corperation",proName: "NYSE:DUK"},
    {title: "Vistara Corporation",proName: "NYSE:VST"},
    {title: "Adobe Inc.",proName: "NASDAQ:ADBE"}]
  
  
    chartConfig: any = {
      symbol: '',
      width: 350,
      height: 220,
      locale: "in",
      dateRange: "12M",
      colorTheme: "light",
      isTransparent: false,
      autosize: false,
      largeChartUrl: ""
    };
   
  constructor(private backservice: BackService, private router: Router) {
  }

  ngOnInit(): void {
    //Tape Widgit
    const scripttape = document.createElement('script');
    scripttape.src ="https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js"
    scripttape.async = true;
    scripttape.innerHTML = JSON.stringify(
    { 
      symbols: this.s,
      showSymbolLogo :  true,
      colorTheme  :  "dark",
      isTransparent : true,
      displayMode : "adaptive",
      locale : "in"
    });
    const container = document.getElementsByClassName('tradingview-widget-container__widget_tape')[0];
    container.appendChild(scripttape);

    // Form
    this.myForm = new FormGroup({
    stock: new FormControl('Select Your Stock', [Validators.required, Validators.pattern("^[a-zA-Z ]*$")]),
    qty: new FormControl('--', [Validators.required, Validators.minLength(1)]),
    })

    this.unm=localStorage.getItem("unm")
  }

  // ************************ SHOW PRICE FUNCTION ***********************************
  show_price(Form: FormGroup)
  {
    const divElement = document.getElementById('myDiv');
  if (divElement) 
  {
    divElement.innerHTML = '';
  }
  const divElement1 = document.getElementById('myDiv1');
  if (divElement1) 
  {
    divElement1.innerHTML = '';
  }
    console.log("1")
    this.stock = Form.value.stock;
    console.log(this.stock)
    console.log("2")
    this.stocknames.map((element,index)=>{
      if(element.sname===this.stock){
        console.log("3")
        this.selectedProname=element.proname
        console.log(element.proname);
        console.log("4")
      }
    })

    console.log(this.selectedProname)
    console.log("5")
    this.backservice.getprice(this.stock).subscribe((res : any)=>
      {
        console.log("6")
        this.val$ = res;
        this.price = parseInt(this.val$["Global Quote"]["05. price"]) * 82.17;
        this.temp = parseFloat(this.val$["Global Quote"]["09. change"]);
        if (this.temp<0) {
          this.prediction="Fall. So Try For Short Sell"
        } else {
          this.prediction="Rise. So Better To Be In Long Position"
        }
      })
    console.log("7")
    this.chartConfig.symbol = this.selectedProname;
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js';
    script.async = true;
    script.innerHTML = JSON.stringify(
    {
      "symbol": this.selectedProname,
      "width": 400,
      "height": 450,
      "locale": "in",
      "dateRange": "12M",
      "colorTheme": "dark",
      "isTransparent": true,
      "autosize": false,
      "largeChartUrl": ""
    });

    const container = document.getElementsByClassName('tradingview-widget-container__widget')[0];
    container.appendChild(script);

    const script1 = document.createElement('script');
    script1.type = 'text/javascript';
    script1.src = 'https://s3.tradingview.com/external-embedding/embed-widget-technical-analysis.js';
    script1.async = true;
    script1.innerHTML = JSON.stringify(
    {
    "interval": "1D",
    "width": 425,
    "isTransparent": true,
    "height": 450,
    "symbol": this.selectedProname,
    "showIntervalTabs": true,
    "locale": "in",
    "colorTheme": "dark"
  })
  const container1 = document.getElementsByClassName('tradingview-widget-container__widget_meter')[0];
  container1.appendChild(script1);

    // const [predictionResult, apiResponse] = this.backservice.predict();
    // this.prediction=predictionResult
  }  


// ************************** ADD USER BUYING FUNCTION *************************

    
  add_userdetail(Form: FormGroup)
  {
    this.currentDate = new Date().getDate();
    this.currentmonth = new Date().getMonth()+1;
    this.currentyear = new Date().getFullYear();
    this.date = this.currentyear+"-"+this.currentmonth+"-"+this.currentDate
    console.log("1 - Date",this.date)
    this.quantity = Form.value.qty;
    console.log("2 - Quantity",this.quantity)

    this.stknm = Form.value.stock;
    console.log("3 - Stock",this.stknm)
    
    this.backservice.getprice(this.stknm).subscribe({
      next:
      (res: any) => {
      this.val$ = res;
      console.log("4 - Response Of Price Api",this.val$)
      this.amount = Form.value.qty * parseInt(this.val$["Global Quote"]["05. price"]) * 82.17;
      console.log("5 - Amount",this.amount)
    },
    error: (error)=>{
      console.log(error);
      
    },
    complete : ()=>
    {
      const uidData: string | null = localStorage.getItem("Uid");
      const uidUnknown: unknown = uidData;
      const uidNumber: number = uidUnknown as number;
      this.uid = <string>uidData
      console.log("6 - Uid",this.uid)
      this.backservice.adduser(this.date, this.uid, this.stknm, this.quantity, this.amount,true).subscribe((values: any) => {
        console.log("7 - Final Buy Api",values);
      }
      );
        if (this.click == 1)
        {
          const box2 = document.getElementById("alertnq");
         const el2 = document.createElement('div');
         el2.innerHTML = `<div class="alert alert-danger alert-dismissible fade show" role="alert">
         Enter correct name of stock
          <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
          </div>`;
         box2?.append(el2);
         Form.reset();
          
        }else
        {
         const box1 = document.getElementById("alertnq")
          const el1 = document.createElement('div');
          el1.innerHTML = `<div class="alert alert-success alert-dismissible fade show" role="alert">
          Successfully buyed!!
          <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
          </div>`;
          box1?.append(el1);
         document.getElementById('forclickremove1')?.remove();
         document.getElementById('forclickremove2')?.remove();
         this.click = 0;
         this.status();
         this.myForm.reset();
       }
    }
  })
}


  //*********************** GET THE STATUS OF USER BUYING FUNCTION *************************** 

  status() {
    
    this.hidden=!this.hidden
    const uidData: string | null = localStorage.getItem("Uid");
    // const uidUnknown: unknown = uidData;
    // const uidNumber: number = uidUnknown as number;
    this.uid = uidData
    console.log("6 - Uid",this.uid)
    this.backservice.status(this.uid).subscribe((valu: any)=>{
      console.log(valu)
      this.ary=valu
      for (let x of this.ary) {
        if(x.bs===true)
        {
          this.pl=this.pl-x.totalAmount
        }
        else
        {
          this.pl=this.pl+x.totalAmount
        }
      }
    }

    )
  }

// ****************************** SELL STOCK FUNCTION **********************************

sellstock(Form: FormGroup) {
  let color = "danger";
  let quote = "loss";
  this.currentDate = new Date().getDate();
    this.currentmonth = new Date().getMonth()+1;
    this.currentyear = new Date().getFullYear();
    this.date = this.currentyear+"-"+this.currentmonth+"-"+this.currentDate
    console.log("1 - Date",this.date)
    this.quantity = Form.value.qty;
    console.log("2 - Quantity",this.quantity)

    this.stknm = Form.value.stock;
    console.log("3 - Stock",this.stknm)
    
    this.backservice.getprice(this.stknm).subscribe({
      next:
      (res: any) => {
      this.val$ = res;
      console.log("4 - Response Of Price Api",this.val$)
      this.amount = Form.value.qty * parseInt(this.val$["Global Quote"]["05. price"]) * 82.17;
      console.log("5 - Amount",this.amount)
    },
    error: (error)=>{
      console.log(error);
      
    },
    complete : ()=>
    {
      const uidData: string | null = localStorage.getItem("Uid");
      const uidUnknown: unknown = uidData;
      const uidNumber: number = uidUnknown as number;
      this.uid = <string>uidData
      console.log("6 - Uid",this.uid)
      this.backservice.sell(this.date, this.uid, this.stknm, this.quantity, this.amount,false).subscribe((values: any) => {
        console.log("7 - Final Buy Api",values);
      }
      );
         const box1 = document.getElementById("alertnq")
          const el1 = document.createElement('div');
          el1.innerHTML = `<div class="alert alert-danger alert-dismissible fade show" role="alert">
          Successfully Selled!!
          <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
          </div>`;
          box1?.append(el1);
         document.getElementById('forclickremove1')?.remove();
         document.getElementById('forclickremove2')?.remove();
         this.click = 0;
         this.status();
         this.myForm.reset();
    }
  })
}


  // ********************** LOGOUT FUNCTION ***********************************
  
  logout() {
    ls.clear()
    this.router.navigateByUrl('/');
  }
}
