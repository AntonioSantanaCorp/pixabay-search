import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarComponent } from './layout/toolbar/toolbar.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchCardComponent } from './components/search-card/search-card.component';
import { ResultListComponent } from './components/result-list/result-list.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ToolbarComponent,
    SearchCardComponent,
    ResultListComponent,
    // PaginatorResultComponent,
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
