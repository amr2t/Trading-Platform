import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OptionpageComponent } from './optionpage/optionpage.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { authGuard } from './auth.guard';

const routes: Routes = 
[{
  path:'',
  component:OptionpageComponent
},
{
  path:'home',
  component:HomeComponent,
  canActivate:[authGuard]

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
  path:'**',
  component:OptionpageComponent 
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
