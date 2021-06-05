import { UserService } from './user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user = {
    createdAt:'',
    updatedAt:'',
    deletedAt:'',
    id:'',
    prenom: '',
    nom: '',
    sexe:'',
    cin:'',
    role:'',
    email:'',
    password:'',
    salt:'',
    username:''
  };
  submitted = false;

  constructor(private UserService: UserService) { }

  ngOnInit(): void {
  }

  createUser(): void {
    const data = {
      nom: this.user.nom,
      prenom: this.user.prenom,
      sexe: this.user.sexe,
      cin: this.user.cin,
      role: this.user.role,
      email: this.user.email,
      password: this.user.password,
      salt: this.user.salt,
      username: this.user.username,
    };

    this.UserService.createUser(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newUser(): void {
    this.submitted = false;
    this.user = {
    createdAt:'',
    updatedAt:'',
    deletedAt:'',
    id:'',
    prenom: '',
    nom: '',
    sexe:'',
    cin:'',
    role:'',
    email:'',
    password:'',
    salt:'',
    username:''
    };
  }
}
