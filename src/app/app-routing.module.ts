import { RegisterUserComponent } from './viwes/register-user/register-user.component';
import { HomeComponent } from './viwes/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent,

  },
  {
    path:'registeruser',
    component:RegisterUserComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
