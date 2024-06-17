import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../../core/services/user.service';
import {  Router } from '@angular/router';
import { User } from '../../../core/models/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {
    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      role: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.registerForm.valid) {
      const newUser: User = this.registerForm.value;
      this.userService.createUser(newUser).subscribe(
        () => {
          alert('✨ GRACIAS POR REGISTRARTE ' + newUser.username + ' INICIA SESION PARA EMPEZAR ✨');
          this.router.navigate(['/login']);
        },
        error => console.error('Error creating user!', error)
      );
    }
  }
}