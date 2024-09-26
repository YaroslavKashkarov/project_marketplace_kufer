import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FORM_LABEL } from '../../../data/form-data';
import { TogglePasswordEditing } from '../../../servises/toggle-profile';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { passwordValidator } from '../../../servises/pass-validator';

@Component({
  selector: 'app-password-editing',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './password-editing.component.html',
  styleUrl: './password-editing.component.scss',
})
export class PasswordEditingComponent implements OnInit {
  label = FORM_LABEL;
  showPassword: boolean = false;
  visibleIconDisplay = 'block';
  invisibleIconDisplay = 'none';
  passForm!: FormGroup;

  constructor(
    public togglePasswordEditing: TogglePasswordEditing,
    private fb: FormBuilder,
  ) {}

  ngOnInit() {
    this.initializeForm();
    this.setupMatchingPasswordValidator();
  }

  closeEditing(): void {
    this.togglePasswordEditing.isPasswordEditingVisible = false;
  }

  setupMatchingPasswordValidator(): void {
    const confirmPasswordControl = this.passForm.get('confirmPassword');
    if (confirmPasswordControl) {
      confirmPasswordControl.setValidators([Validators.required, this.matchingPasswordValidator()]);
      confirmPasswordControl.updateValueAndValidity();
    }
  }

  matchingPasswordValidator(): any {
    return (control: { value: any }) => {
      const password = this.passForm.get('password')?.value;
      const confirmPassword = control.value;

      if (password !== confirmPassword) {
        return { mismatch: true };
      } else {
        return null;
      }
    };
  }

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
    this.visibleIconDisplay = this.showPassword ? 'none' : 'block';
    this.invisibleIconDisplay = this.showPassword ? 'block' : 'none';
  }

  private initializeForm(): void {
    this.passForm = this.fb.group({
      password: [
        null,
        [Validators.required, Validators.minLength(8), Validators.maxLength(25), passwordValidator],
      ],
      confirmPassword: [
        null,
        [Validators.required, Validators.minLength(8), Validators.maxLength(25)],
      ],
    });
  }
}
