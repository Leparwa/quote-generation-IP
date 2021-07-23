import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateQuoteComponent } from './components/create-quote/create-quote.component';
import { CreatedQuotesComponent } from './components/created-quotes/created-quotes.component';
import { PortalLayoutComponent } from './components/portal-layout/portal-layout.component';
import { QuotesRankingComponent } from './components/quotes-ranking/quotes-ranking.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'quotes',
    pathMatch:'full'
  },
  {
    path:'portal',
    component:PortalLayoutComponent, 
  },
  {
    path:'quotes',
    component:CreatedQuotesComponent, 
  },
  {
    path:'create-quote',
    component:CreateQuoteComponent
  },
  {
    path:'quotes-ranking',
    component:QuotesRankingComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
