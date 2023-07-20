import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({        //Service instance inject karega jaha jaroorat hai.
  providedIn: 'root'  // root dene se poore app mai kahi bhi inject kar sakte hai.
})
export class BackService {

  status=false;
  email = "";
  stockprediction:string=""
  constructor(private _http:HttpClient) {}     //Isse Service http request use kar k server se communicate kar sakta hai.

  communicatemessage(msg:any){
    console.log("Communicate message is called");
    this.email=msg;
  }

  // ****************** GET PRICE**************************************
  
  // getprice(name:any):Observable<object>{
  //   console.log("getprice service function is called"); 
  //   console.log(this._http.get(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${name}&apikey=TM0KKBA3TUNIU9US`)) 
  //   return this._http.get(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${name}&apikey=TM0KKBA3TUNIU9US`);
    
  // }

  getprice(name: any): Observable<object> {
    console.log("getprice service function is called");
    const apiUrl = `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${name}&apikey=7J5EK36H3P8XNYL5`;
  
    return this._http.get(apiUrl).pipe(
      tap((response: any) => {
        console.log("Response from API:", response);
      })
    );
  }

// ********************* ADDUSER **************************************

  adduser(email:any,stock:any,qty:any,invested:any):Observable<object>{
    console.log("Add user function is called...");
    return this._http.post("http://localhost:8080/",{id:email,stockname:stock,qty:qty,invested:invested}); 
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

  login(email:any,password:any):Observable<object>{
    console.log("back service login function called..."+email+password);
    return this._http.post("http://localhost:8080/login",{email:email,password:password});
  }

// ******************* SIGNUP ******************************************

  signup(email:any,password:any):Observable<object>{
    return this._http.post("http://localhost:8080/register",{email:email,password:password});
  }
}
