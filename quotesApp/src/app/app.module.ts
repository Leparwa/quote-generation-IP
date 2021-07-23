import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateFormComponent } from './sharedResources/components/create-form/create-form.component';
import { CreateQuoteComponent } from './components/create-quote/create-quote.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { QuoteCardComponent } from './sharedResources/components/quote-card/quote-card.component';
import { CreatedQuotesComponent } from './components/created-quotes/created-quotes.component';
import { PortalLayoutComponent } from './components/portal-layout/portal-layout.component';
import { QuotesRankingComponent } from './components/quotes-ranking/quotes-ranking.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateFormComponent,
    CreateQuoteComponent,
    QuoteCardComponent,
    CreatedQuotesComponent,
    PortalLayoutComponent,
    QuotesRankingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormlyBootstrapModule,
    FormlyModule.forRoot({ extras: { lazyRender: true } }),
    NgbModule,

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
