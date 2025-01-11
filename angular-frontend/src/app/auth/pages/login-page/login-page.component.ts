import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginDto } from '../../interfaces/loginDto.interface';
import { AuthService } from '../../services/auth.service';

@Component({
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent implements OnInit{

  private fb: FormBuilder = inject(FormBuilder);
  private authService: AuthService = inject(  AuthService );

  public myForm!: FormGroup;

  public ngOnInit(): void {

    this.myForm = this.fb.group( {
      email: ["", [ Validators.required, Validators.email]  ],
      password: ["", [ Validators.required, Validators.minLength(6) ] ],
    });
  }


  public onSubmit() {
    if( !this.myForm.valid ) {
      this.myForm.markAllAsTouched();
      return;
    }
    const loginDto: LoginDto = this.myForm.value;
    console.table(loginDto)
    // this.authService.login( loginDto ).subscribe();

  }

}
