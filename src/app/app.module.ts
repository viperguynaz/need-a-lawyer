import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './modules/app-routing/app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './containers/home/home.component';
import { ResultsComponent } from './containers/results/results.component';
import { DetailComponent } from './containers/detail/detail.component';
import { PrivacyComponent } from './containers/privacy/privacy.component';
import { TermsComponent } from './containers/terms/terms.component';
import { NotFoundComponent } from './containers/not-found/not-found.component';
import { AboutComponent } from './containers/about/about.component';
import { SearchComponent } from './containers/search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ResultsComponent,
    DetailComponent,
    PrivacyComponent,
    TermsComponent,
    NotFoundComponent,
    AboutComponent,
    SearchComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
