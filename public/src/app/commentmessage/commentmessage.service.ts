import { Injectable } from '@angular/core';
import { Http } from '@angular/http'
import 'rxjs'

@Injectable()
export class CommentmessageService {

  constructor(private _http:Http) { }

  grabmessage(value){
    return this._http.post('/grabmessage', value)
    .map((response)=>response.json())
    .toPromise()
  }
  commenting(value){
    return this._http.post('/commenting', value)
    .map((response)=> response.json())
    .toPromise()
  }

}
