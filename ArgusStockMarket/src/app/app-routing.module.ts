import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmaicheckComponent } from './emaicheck/emaicheck.component';
import { HomeComponent } from './home/home.component';
import { OptionpageComponent } from './optionpage/optionpage.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';

// hello
const routes: Routes = 
[{
  path:'',
  component:OptionpageComponent
},
{
  path:'home',
  component:HomeComponent,
  // canActivate:[AuthGuard]

},
{
  path:'signin',
  component:SigninComponent
},
{
  path:'signup',
  component:SignupComponent
},
{
  path:'emailverify',
  component:EmaicheckComponent
},
{
  path:'**',
  component:HomeComponent 
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
