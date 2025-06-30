import { Component } from '@angular/core';

import { AuthApiService } from '../../../../core/services/auth/auth-api.service';

import {
  UntypedFormBuilder,
  UntypedFormGroup,
  UntypedFormControl,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  user: any = {
    username: '',
    password: '',
  };

  errorMessage: string = '';

  form: UntypedFormGroup;
  username_Ctrl = new UntypedFormControl('', [Validators.required]);
  password_Crtl = new UntypedFormControl('', [Validators.required]);

  constructor(
    private uFormBuilder: UntypedFormBuilder,
    private authApiService: AuthApiService
  ) {
    this.form = this.uFormBuilder.group({
      username: this.username_Ctrl,
      password: this.password_Crtl,
    });
  }

  // Register
  onSubmit() {
    const dataForm = this.form.getRawValue();
    this.authApiService.register(dataForm.username, dataForm.password).subscribe({
      next: (response) => {
        this.errorMessage = '';
        console.log(response);
      },
      error: (err) => {
        if (err.status === 409) {
          this.errorMessage = 'Username already exists.';
        } else if (err.status === 0) {
          this.errorMessage = 'Unable to connect to the server.';
        } else {
          this.errorMessage =
            'An unexpected error occurred. Please try again later.';
        }
        console.error(err);
      },
    });
  }
}
