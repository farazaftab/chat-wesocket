import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CreateComponent } from './create/create.component';
import {MatNativeDateModule} from '@angular/material';
import {DemoMaterialModule} from './material-module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ChatPortletComponent } from './chat-portlet/chat-portlet.component';
import { ChatBodyComponent } from './chat-body/chat-body.component';
import { SocketService } from './socket.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CreateComponent,
    ChatPortletComponent,
    ChatBodyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DemoMaterialModule,
    BrowserAnimationsModule,
    FormsModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [SocketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
