
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
//import { ToastrService } from 'ngx-toastr';
import {TokenService} from '../token.service';
import {AccountService} from '../account.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl(null, [Validators.required]),
    encryptedPassword: new FormControl(null, [Validators.required, Validators.minLength(8)])
  });

  constructor(
    private authService: AuthService,
    private token: TokenService,
    private account: AccountService,
    private router: Router,
    //private toastr:
  ) { }

  ngOnInit(): void {
  }

  signIn() {
    console.log(this.loginForm.value)
    this.authService.login(this.loginForm.value)
      .subscribe(
        res => this.handleResponse(res),
        /*err => this.toastr.error
        (
          `Erreur`,
          'Merci de Vérifier votre email ou mot de passe !',
          {
            timeOut: 3000,
            positionClass: 'toast-bottom-left'
          }
        )*/)
  }

  handleResponse(data) {
    this.token.handle(data);
    this.account.changeAuthStatus(true);
    /*this.toastr.success(
      `Bienvenu : ${ this.token.getInfos().name }`,
      'Vous êtes connectés !',
      {
        timeOut: 3000,
        positionClass: 'toast-bottom-left'
      }
    )*/;
    this.router.navigateByUrl('/');
  }

}

