import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent {
  login(user, pass) {
    if (!user && !pass) return alert('please full username and password');

    if (!user) return alert('please fill email');

    if (!pass) return alert('please fill password');

    this.data
      .signInWithEmailAndPassword(user, pass)
      .then((x) => {
        this.router.navigate(['customers']);
      })
      .catch(() => {
        return alert('email Or Passowrd not match');
      });
  }
  constructor(private data: AngularFireAuth, private router: Router) {}
}

/* login(user,pass) {
     
    let errorMessage = '';
    if(!user) errorMessage= 'Please fill in user name';
    if(!pass)  errorMessage+= '\nPlease fill in password';

    if(errorMessage)
      return alert(errorMessage);

    this.data.signInWithEmailAndPassword
    (user,pass).then(x=>{
       this.router.navigate(['customers']);
    }).catch(()=>{
         alert('User name and password do not match');
    });
  }
 */
