import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
username = ""
users: object[] = []
errors= []
  constructor(private _loginservice: LoginService , private _router: Router) { }

  ngOnInit() {
  }
  logreg(){
    this._loginservice.logreg({username:this.username})
    .then( (returndata)=>{
      this.users = returndata
      this._router.navigate(['/wallpage'])
    })
    .catch(err=>{
      if(err){
        this.errors = err;
      }
    })
  }

}
