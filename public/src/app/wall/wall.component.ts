import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { WallService } from './wall.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-wall',
  templateUrl: './wall.component.html',
  styleUrls: ['./wall.component.css']
})
export class WallComponent implements OnInit {
  newMessage={message:""}
  error="";
  messages:object[]=[];
  username=""
  constructor(private wallservice: WallService, private _router:Router, private ActivatedRoute: ActivatedRoute) { }

  ngOnInit() {
this.checker()
this.refresh()
this.getusername()
  }

getusername(){
  this.wallservice.getusername()
  .then((data)=>{this.username = data})
}
  postMessage(){
    this.wallservice.postMessage({message: this.newMessage.message})
    .then( (data)=> {this.messages= data, this.refresh()})
    .catch(err=>{this.error=err})

  }
  refresh(){
    this.wallservice.refreshpage()
    .then((data)=>{
      this.messages = data;
      this.newMessage.message = ""
    }).catch((err)=>{this._router.navigate([''])})
  }
  createcomment(formData, messageid){
    this.wallservice.commenting({formstuff:formData.value, messid: messageid})
    .then( (data)=>{console.log(data), this.refresh()})
    .catch((err)=>{this.error=err})

  }
  ilikeit(value){
    this.wallservice.ilikeit({messid:value})
    .then( (data)=>{console.log(data), this.refresh()})
    .catch((err)=>{this.error=err})
  }
  logout(){
    this.wallservice.logout()
    .then((data)=>{this._router.navigate([''])})
    .catch((err)=>{this._router.navigate([''])})
  }
  checker(){
    this.wallservice.checker()
    .then((data)=>{console.log("working")})
    .catch((err)=>{this._router.navigate([''])})
  }
  commentliking(messid, commid){
    this.wallservice.commentliking({messid:messid,commid:commid})
    .then((data)=>{console.log(data), this.refresh()})
    .catch((err)=>{this.error=err})
  }
  showmessage(value){
    this._router.navigate(['details/' + value])
  }
  createmessage(){
    this._router.navigate(['newMessage'])
  }
  addanswer(value){
    this._router.navigate(['answer/'+ value])
  }

}
