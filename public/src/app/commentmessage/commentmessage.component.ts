import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { CommentmessageService } from './commentmessage.service'

@Component({
  selector: 'app-commentmessage',
  templateUrl: './commentmessage.component.html',
  styleUrls: ['./commentmessage.component.css']
})
export class CommentmessageComponent implements OnInit {
messageid:""
messages:object
error:any

errormess="message too short"

  constructor(private _router: Router, private commentmessageservice: CommentmessageService, private _activated: ActivatedRoute) {this._activated.params.subscribe((param)=>{
      console.log(param.messid); })
    }

  ngOnInit() {
  this._activated.params.subscribe(params =>{
    this.messageid = params.messid  })
    this.grabmessage()
  }
createcomment(formData, messageid){
this.commentmessageservice.commenting({formstuff:formData.value, messid:messageid})
.then( (data)=> {console.log(data),this.grabmessage()})
.catch((err)=>[this.error = "message too short"])
}

grabmessage(){
this.commentmessageservice.grabmessage({id:this.messageid})
.then((data)=>{this.messages = data[0]})
.catch((err)=>{this.error = this.errormess, console.log(err)})
}
cancel(){
  this._router.navigate([''])
}
tomessage(value){
this._router.navigate(['details/'+value])
}
}
