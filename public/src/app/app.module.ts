import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { WallComponent } from './wall/wall.component';
import { LoginComponent } from './login/login.component'
import { LoginService } from './login/login.service'
import { WallService } from './wall/wall.service'
import { CommentmessageService } from './commentmessage/commentmessage.service'
import { MessagedetailsService } from './messagedetails/messagedetails.service'
import { NewmessageService } from './newmessage/newmessage.service'

import { AppRoutingModule } from './app-routing.module';
import { NewmessageComponent } from './newmessage/newmessage.component';
import { MessagedetailsComponent } from './messagedetails/messagedetails.component';
import { CommentmessageComponent } from './commentmessage/commentmessage.component';

@NgModule({
  declarations: [
    AppComponent,
    WallComponent,
    LoginComponent,
    NewmessageComponent,
    MessagedetailsComponent,
    CommentmessageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule
  ],
  providers: [WallService, LoginService,CommentmessageService,MessagedetailsService,NewmessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
