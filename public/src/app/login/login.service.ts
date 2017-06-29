import { Injectable } from '@angular/core';
import { Http } from '@angular/http'
import 'rxjs';

@Injectable()
export class LoginService {

  constructor(private _http: Http) { }
logreg(data){
return this._http.post('/logreg', data)
.map( (response)=> response.json())
.toPromise();
}


}
