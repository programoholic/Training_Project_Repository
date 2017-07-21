import { Component } from '@angular/core';
import{LoginService} from './login-service.component';
@Component({
  selector: 'app-root',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})
export class LoginComponent {

 getResults=[];
 constructor(private user:LoginService) {
  
 }
  login()
  {
    alert("Login with Google");
    this.user.listUsers().subscribe(res=>{this.getResults=res});
    alert('login successful');
  }

}