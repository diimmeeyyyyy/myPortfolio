import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss',
})
export class ContactFormComponent {
  @ViewChild('Name_Input') nameField!: ElementRef;
  @ViewChild('Email_Input') emailField!: ElementRef;
  focusInputField(inputfield: string) {
    if (
      inputfield === 'name' &&
      this.nameField &&
      this.nameField.nativeElement
    ) {
      this.nameField.nativeElement.focus();
    }
    if (
      inputfield === 'email' &&
      this.emailField &&
      this.emailField.nativeElement
    ) {
      this.emailField.nativeElement.focus();
    }
  }

  checkboxChecked = false;
  checkboxImg = '/assets/img/checkbox-unchecked-default.png';

  changeCheckboxImg() {
    if (!this.checkboxChecked) {
      this.checkboxChecked = true;
      this.checkboxImg = '/assets/img/checkbox-checked.png';
    } else {
      this.checkboxChecked = false;
      this.checkboxImg = '/assets/img/checkbox-unchecked-default.png';
    }
  }

  contactData = {
    name: '',
    email: '',
    message: '',
  };

  onSubmit(ngForm: NgForm) {
    debugger;
    if (ngForm.valid && ngForm.submitted) {
      console.log(this.contactData);
    }
  }

  isFocused = false;
  onFocus() {
    this.isFocused = true;
  }
  onBlur() {
    this.isFocused = false;
  }

  focusOnName = false;
  onFocusNameField() {
    this.focusOnName = true;
  }
  onBlurNameField() {
    this.focusOnName = false;
  }

  focusOnEmail = false;
  onFocusEmailField() {
    this.focusOnEmail = true;
  }
  onBlurEmailField() {
    this.focusOnEmail = false;
  }
}
