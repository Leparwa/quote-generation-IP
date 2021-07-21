import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateQuoteComponent } from './create-quote/create-quote.component';

const routes: Routes = [
  {
    path:'',
    component:CreateQuoteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
