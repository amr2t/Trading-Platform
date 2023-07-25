import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HomeComponent } from './home/home.component';
import { tap } from 'rxjs/operators';
import { DatePipe } from '@angular/common';

@Injectable({        //Service instance inject karega jaha jaroorat hai.
  providedIn: 'root'  // root dene se poore app mai kahi bhi inject kar sakte hai.
})
export class BackService {

  // status=false;
  // email :string='';
  // uid:any;
  // buyingDate:string="";


  constructor(private _http:HttpClient) {}     //Isse Service http request use kar k server se communicate kar sakta hai.

  // communicatemessage(msg:any){
  //   console.log("Communicate message is called");
  //   this.email=msg;
  // }

  // Auth ka Logged In

  isLoggedin(){
    return !!localStorage.getItem("status")
  }

  // ****************** GET PRICE**************************************

  getprice(name: any): Observable<any> {
    console.log("getprice service function is called");
    const apiUrl = `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${name}&apikey=7J5EK36H3P8XNYL5`;
  
    return this._http.get(apiUrl).pipe(
      tap((response: any) => {
        console.log("Response from API:", response);
      })
    );
  }

// ********************* ADDUSER OR BUY FUNCTION**************************************

  adduser(buyingDate: string, uid: any, stockName: string,quantity: number, totalAmount: number,bs: boolean): Observable<any> {
    const requestBody = {
      buyingDate: buyingDate,
      user: {
        uid: uid
      },
      stockName: stockName,
      quantity: quantity,
      totalAmount: totalAmount,
      bs:bs
    };


    console.log("Add user function is called...");
    return this._http.post<any>("http://localhost:8080/addStock", requestBody);
  }

  // ************** GET STATUS *****************************************

  status(uid:any):Observable<object>{
    console.log("Get status is called");
    return this._http.get(`http://localhost:8080/showStocks/${uid}`)
  }

  // ****************** SELL ******************************************

  sell(buyingDate: string, uid: any, stockName: string,quantity: number, totalAmount: number,bs:boolean):Observable<object>{
    const requestBody = {
      buyingDate: buyingDate,
      user: {
        uid: uid
      },
      stockName: stockName,
      quantity: quantity,
      totalAmount: totalAmount,
      bs:bs
    };

    console.log("Back service of email is called");
    return this._http.post("http://localhost:8080/sellStocks",requestBody);
  }

  // ***************** LOGIN ******************************************

  login(email:any,password:any):Observable<any>{

    const requestBody = {
      email: email,
      password: password,
    };

    console.log("back service login function called..."+email+password);
    return this._http.post("http://localhost:8080/login",requestBody);

  }

// ******************* SIGNUP ******************************************

  signup(email:any,password:any):Observable<any>{
    return this._http.post("http://localhost:8080/register",{email:email,password:password});
  }
}
