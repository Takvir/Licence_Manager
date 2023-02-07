import { Component, OnInit } from '@angular/core';
import { GoogleLoginProvider, SocialAuthService , SocialUser } from '@abacritt/angularx-social-login';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  isTakvir : boolean = false ;
  user : any;
  loggedIn : any;
  constructor(private authService : SocialAuthService,
    private _router : Router) { }

  ngOnInit(): void {
    this.authService.authState.subscribe((user)=>{
      this.user = user;
      if(this.user?.id == 108978967095096946615)
      {
        this.isTakvir = true;
        this._router.navigate(['list'])
      }
      else{
        this.isTakvir = false;
      }

      this.loggedIn = (user != null)
      console.log(this.user)
    })
  }

  signWithGoogle() {  // For SignIn
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  signOut() : any {  // For Sign Out
    this.authService.signOut();
  }

  backtoLogin(){
    console.log('click')
    this.user = false;
  }

}
