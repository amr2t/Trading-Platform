import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators, FormsModule } from '@angular/forms';
import { BackService } from '../sl.service';
// import { AuthGuard } from '../auth.guard';
import ls from "localstorage-slim";


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit{
  elsecheck = 0;
  myForm!: FormGroup;

// *************** CONSTRUCTOR ************************************************ private authg: AuthGuard

  constructor(private router: Router, private backservice: BackService) { }

//  ************** ngOnInit ***************************************************

  ngOnInit(): void {
    this.myForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    })
  }

  // ********************* TO STOCK FUNCTION **********************************

  tostock(Form: FormGroup) {
    console.log("1")
    const get = new Promise<any>((resolve, _reject) => {
      console.log("2")
      console.log("Checked Promise...")
      console.log("3")
      this.backservice.login(Form.value.email, Form.value.password).subscribe(
        data => {
          console.log(data.uid)
          console.log(data)
          if(Form.value.password===data.password)
          {
            localStorage.setItem("Uid",data.uid)
            this.router.navigateByUrl('/home');
          }else
          {
            console.log("7")
            this.elsecheck=1;
            console.log("else statement is called");
            console.log("8")
            const box1 = document.getElementById("alertnq");
            const el1 = document.createElement('div');
            console.log("9")
            el1.innerHTML = ` <div class="alert alert-danger alert-dismissible fade show" role="alert">
            Please enter correct email or password
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>`
            console.log("10")
            box1?.append(el1);
            Form.reset();
          }
        },
        error=> console.log(error) 
      ) 
    })
    // localStorage.setItem("Email",Form.value.email)
    // console.log(Form.value.email)
    // get.then((value) => {
    //   console.log("4")
    //   console.log("to stock get.then")
    //   this.router.navigateByUrl('/home');
    //   if (value["message"] == "User logged in") {
    //     console.log("5")
    //     ls.set('#qwAs?.,s', Form.value.email, { encrypt: true, secret: 88 });
    //     this.backservice.communicatemessage(Form.value.email);
    //     console.log("6")
    //     ls.set('qsc@1!%^36', 'true', { encrypt: true, secret: 88 });
    //     console.log(value["accessToken"]);
    //     ls.set('wqewq234!2@',value["accessToken"],{encrypt:true, secret:88});
    //   }
    //   else {
    //     console.log("7")
    //     this.elsecheck=1;
    //     console.log("else statement is called");
    //     console.log("8")
    //     const box1 = document.getElementById("alertnq");
    //     const el1 = document.createElement('div');
    //     console.log("9")
    //     el1.innerHTML = ` <div class="alert alert-danger alert-dismissible fade show" role="alert">
    //     Please enter correct email or password
    //    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    //  </div>`
    //  console.log("10")
    //     box1?.append(el1);
    //     Form.reset();
    //   }
    // });
  }
  // ****************** IS FORM VALID FUNCTION JUST FOR TESTING *****************************

  isFormValid():Boolean{
    return this.myForm.valid;
  }

}
