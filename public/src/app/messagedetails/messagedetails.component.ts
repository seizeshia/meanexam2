import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { MessagedetailsService } from './messagedetails.service'

@Component({
  selector: 'app-messagedetails',
  templateUrl: './messagedetails.component.html',
  styleUrls: ['./messagedetails.component.css']
})
export class MessagedetailsComponent implements OnInit {
  sub:""
  message:""
  messages:object
  error:""

  constructor(private _router:Router,private messagedetailsservice:MessagedetailsService, private _activated: ActivatedRoute) {this._activated.params.subscribe((param)=>{
      console.log(param.messid); })
    }
  ngOnInit() {
    this._activated.params.subscribe(params =>{
      this.message = params.messid  })
    this.grabmessage()
  }
  grabmessage(){
  this.messagedetailsservice.grabmessage({id:this.message})
  .then((data)=>{this.messages = data[0]})
  .catch((err)=>{this.error=err})
  }
  commentliking(messid, commid){
    this.messagedetailsservice.commentliking({messid:messid,commid:commid})
    .then((data)=>{console.log(data), this.grabmessage()})
    .catch((err)=>{this.error=err})
  }
  addanswer(value){
    this._router.navigate(['answer/'+ value])
  }
}
