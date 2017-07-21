import { Injectable } from '@angular/core';

import {Http,Response} from '@angular/http';
import{Observable} from"rxjs/Observable";
import 'rxjs/Rx';




@Injectable()
export class LoginService{

  constructor(private http: Http) {  }
   
    listUsers(){
         console.log("In service");
        let url = "http://localhost:4500/auth/google";        
       return this.http.get(url).map(res=>res.json());      
    }
    
}
