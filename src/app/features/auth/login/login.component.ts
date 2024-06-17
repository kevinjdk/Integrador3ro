import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../../core/services/user.service';
import { User } from '../../../core/models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  users: User[] = [];

  constructor(private userService: UserService, private router: Router) { }
  // funcion para traer todos los usuarios
  ngOnInit(): void {
    this.userService.getUsers().subscribe((data: User[]) => {
      this.users = data;
    });
  }

  username: string = '';
  password: string = '';
  errorMessage: string = '';

  login(): void {
    this.userService.authenticateUser(this.username, this.password).subscribe(
      user => {
        if (user) {
          // Usuario autenticado
          console.log('Usuario autenticado:', user);
          alert('USUARIO AUTENTIFICADO BIENVENIDO ' + user.username.toUpperCase());
          this.router.navigate(['/home']); // enviar a la pagina ya logeado
        } else {
          this.errorMessage = 'Usuario o contraseña incorrectos';
          alert('USUARIO O CONTRASEÑA INCORRECTOS');
        }
      },
      error => {
        console.error('Error al autenticar usuario:', error);
        this.errorMessage = 'Error al autenticar usuario';
      }
    );
  }
}
