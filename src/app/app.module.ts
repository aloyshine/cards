import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {CardsService} from './cards.service';
import {EnvironmentService} from './environment.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AppComponent } from './app.component';
import { CardsSelectComponent } from './cards-select/cards-select.component';
@NgModule({
  declarations: [
    AppComponent,
    CardsSelectComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    CardsService,
    EnvironmentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
