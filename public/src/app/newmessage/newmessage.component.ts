import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { NewmessageService } from './newmessage.service'

@Component({
  selector: 'app-newmessage',
  templateUrl: './newmessage.component.html',
  styleUrls: ['./newmessage.component.css']
})
export class NewmessageComponent implements OnInit {
  newMessage={message:"", desc:""}
  error=""
  constructor(private newmessageservice: NewmessageService, private _router: Router) { }

  ngOnInit() {
  }
  cancelpressed(){
    this._router.navigate([''])
  }
  postMessage(){
    this.newmessageservice.postMessage({message:this.newMessage})
    .then( (data)=> {this._router.navigate(['wallpage'])})
    .catch((err)=> {this.error = err})
  }
}
