import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { AuthenticationService } from '../../../services/authentication.service';
import { debounce, interval } from 'rxjs';
import { ErrorMessagesComponent } from '../../../../validation/error-messages/error-messages.component';
import { CustomValidators } from '../../../../validation/custom-validators';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-sign-in-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule, ErrorMessagesComponent],
  templateUrl: './sign-in-form.component.html',
  styleUrl: './sign-in-form.component.scss'
})
export class SignInFormComponent implements OnInit{

  signInForm: FormGroup;
  hide: boolean = true;
  submitted: boolean = false;

  @Output()
  isSuccessful = new EventEmitter<void>();

  constructor(private authService: AuthenticationService){}

  ngOnInit(): void {
    this.signInForm = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
      confirmPassword: new FormControl('', Validators.required),
    }, CustomValidators.validateConfirmPassword);

    this.signInForm.valueChanges
    .pipe(
      debounce((v) => interval(300))
    )
    .subscribe(() => {
      if (this.signInForm.valid && this.signInForm.touched)
      this.signInForm.setErrors(null);
    })
  }

  onSignInFormSubmit() {
    Object.keys(this.signInForm.controls).forEach(key => {
      this.signInForm.get(key)?.markAsDirty();
    });

    if (this.signInForm.valid) {
      const registerUser = this.signInForm.getRawValue();
      delete registerUser.confirmPassword;
      this.authService.registerUser(registerUser).subscribe(
        {
          next: () => {
            this.isSuccessful.emit();
          },
          error: (errorResponse: HttpErrorResponse) => {
            const errorsArray: Array<any> = errorResponse.error.message;
            errorsArray.forEach(x=> this.signInForm.get(x.field)?.setErrors({
              'serverError': x.error
            }));
            this.signInForm.markAsUntouched();
          }
        }
      )
    }
  }
}
