import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-optionpage',
  templateUrl: './optionpage.component.html',
  styleUrls: ['./optionpage.component.css']
})
export class OptionpageComponent {
  constructor(private router:Router) { }

  ngOnInit(): void {}
  
  tologin(){
    this.router.navigateByUrl('/signin');
  }
  tosignup(){
    this.router.navigateByUrl('/signup');
  }

}
