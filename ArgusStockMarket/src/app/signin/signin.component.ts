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
export class SigninComponent implements OnInit
{
  elsecheck = 0;
  myForm!: FormGroup;
  temp: number=0;

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
      this.backservice.login(Form.value.email, Form.value.password).subscribe(
        data => {
          console.log("2")
          console.log(data.uid)
          console.log(data)
          localStorage.setItem("unm",Form.value.email.toString())
          if(Form.value.password===data.password)
          {
            console.log("3")
            this.temp=data.uid
            localStorage.setItem("Uid",this.temp.toString())
            this.router.navigateByUrl('/home');
          }else
          {
            console.log("4")
            this.elsecheck=1;
            console.log("else statement is called");
            console.log("5")
            const box1 = document.getElementById("alertnq");
            const el1 = document.createElement('div');
            console.log("6")
            el1.innerHTML = ` <div class="alert alert-danger alert-dismissible fade show" role="alert">
            Please enter correct email or password
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>`
            console.log("7")
            box1?.append(el1);
            Form.reset();
          }
        }) 
    }
  // ****************** IS FORM VALID FUNCTION JUST FOR TESTING *****************************

  isFormValid():Boolean{
    return this.myForm.valid;
  }
}
