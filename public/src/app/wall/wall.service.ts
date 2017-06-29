import { Injectable } from '@angular/core';
import { Http } from '@angular/http'
import 'rxjs'

@Injectable()
export class WallService {

  constructor(private _http: Http) { }
postMessage(value){
return this._http.post('/posting', value)
.map((response)=> response.json())
.toPromise()
}

refreshpage(){
  console.log("in service's get messages");
  return this._http.get('/refresh')
  .map((response)=>response.json())
  .toPromise()
}
commenting(value){
  console.log("somethings happening")
  console.log(value)
  return this._http.post('/commenting', value)
  .map((response)=>response.json())
  .toPromise()
}
ilikeit(value){
return this._http.post('/liking', value)
.map((response)=>response.json())
.toPromise()
}
logout(){
  return this._http.get('/logout')
  .map((response)=>response.json())
  .toPromise()
}
checker(){
  return this._http.get('/checker')
  .map((response)=>response.json())
  .toPromise()
}
getusername(){
  return this._http.get('/getusername')
  .map((response)=>response.json())
  .toPromise()
}

commentliking(value){
  return this._http.post('/commentliking', value)
  .map((response)=>response.json())
  .toPromise()
}


}
