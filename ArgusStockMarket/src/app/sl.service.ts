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

  status=false;
  email = "";
  uid:any;
  buyingDate:string="";


  constructor(private _http:HttpClient) {}     //Isse Service http request use kar k server se communicate kar sakta hai.

  communicatemessage(msg:any){
    console.log("Communicate message is called");
    this.email=msg;
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

  // adduser(_currentDate:any,qty:any,invested:any,uid:any,stock:any):Observable<object>{
  //   console.log("Add user function is called...");
  //   return this._http.post<any>("http://localhost:8080/addStock",{datbuyingDate:_currentDate,quantity:qty,totalAmount:invested,user_uid:uid,stockName:stock}); 
  // }

  adduser(buyingDate: string, quantity: number, totalAmount: number, uid: string, stockName: string): Observable<any> {
    const requestBody = {
      buyingDate: buyingDate,
      quantity: quantity,
      totalAmount: totalAmount,
      user: {
        uid: uid
      },
      stockName: stockName
    };
    console.log("Add user function is called...");
    return this._http.post<any>("http://localhost:8080/addStock", requestBody);
  }

  // ************** GET STATUS *****************************************

  getstatus(email:any):Observable<object>{
    console.log("Get status is called");
    return this._http.get(`http://localhost:3000/getstatus?id=${email}`)
  }

  // ****************** SELL ******************************************

  sell(email:any,stock:any,qty:any):Observable<object>{
    console.log("Back service of email is called");
    return this._http.post("http://localhost:3000/sell",{id:email,name:stock,qty:qty});
  }

  // ***************** LOGIN ******************************************

  login(email:any,password:any):Observable<any>{
    console.log("back service login function called..."+email+password);
    return this._http.post("http://localhost:8080/login",{email:email,password:password});
  }

// ******************* SIGNUP ******************************************

  signup(email:any,password:any):Observable<any>{
    return this._http.post("http://localhost:8080/register",{email:email,password:password});
  }
}
