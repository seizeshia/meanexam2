import { Injectable } from '@angular/core';
import { Http } from '@angular/http'
import 'rxjs'

@Injectable()
export class MessagedetailsService {

  constructor(private _http: Http) { }
grabmessage(value){
  return this._http.post('/grabmessage', value)
  .map((response)=>response.json())
  .toPromise()
}
commentliking(value){
  return this._http.post('/commentliking', value)
  .map((response)=>response.json)
  .toPromise()
}
}
