import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TopicosComponent } from './topicos/topicos.component';
import { TopicosModalComponent } from './components/topicos-modal/topicos-modal.component';
import { TopicosListComponent } from './components/topicos-list/topicos-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TopicosComponent,
    TopicosModalComponent,
    TopicosListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
