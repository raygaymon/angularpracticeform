import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './components/details/details.component';
import { FormComponent } from './components/form/form.component';
import { enableDebugTools } from '@angular/platform-browser';

const routes: Routes = [
  {path:'', redirectTo: 'forms/home', pathMatch: 'full'},
  {path: 'forms/home', component: FormComponent},
  {path: 'forms/deets',component: DetailsComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
