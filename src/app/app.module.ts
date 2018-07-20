import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BodyComponent } from './body/body.component';
import { HeaderComponent } from './header/header.component';
import { TopArticlesPipe } from './top-articles.pipe';




@NgModule({
  declarations: [AppComponent, HeaderComponent, BodyComponent, TopArticlesPipe],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
