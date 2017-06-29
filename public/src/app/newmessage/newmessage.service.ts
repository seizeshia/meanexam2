import { Injectable } from '@angular/core';
import { Http } from '@angular/http'
import 'rxjs'

@Injectable()
export class NewmessageService {

  constructor(private _http:Http) { }
  postMessage(value){
  return this._http.post('/posting', value)
  .map((response)=> response.json())
  .toPromise()
  }
}
