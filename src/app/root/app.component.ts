import { Component, VERSION } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
})
export class AppComponent {

  log:boolean;
  constructor(public data:AngularFireAuth
    , private router:Router
    ){
    this.data.onAuthStateChanged(( user: any ) => {
      user ? this.log=true : this.log=false;
    });
  }
  signOut(){
        this.data.signOut().then(x=>{
          this.router.navigate(['login']); 
        });
      }
        
  }

