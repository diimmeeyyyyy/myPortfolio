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
  focusOnName = false;
  focusOnEmail = false;
  focusOnMessage = false;
  @ViewChild('Name_Input') nameField!: ElementRef;
  @ViewChild('Email_Input') emailField!: ElementRef;
  @ViewChild('Message_Input') messageField!: ElementRef;

  focusInputField(inputfield: 'name' | 'email' | 'message') {
    const fields = {
      name: this.nameField,
      email: this.emailField,
      message: this.messageField,
    };
    const field = fields[inputfield];
    if (field && field.nativeElement) {
      field.nativeElement.focus();
    }
    this.focusSettings(inputfield);
  }

  focusSettings(inputfield: string) {
    switch (inputfield) {
      case 'name':
        this.focusOnMessage = false;
        this.focusOnEmail = false;
        this.focusOnName = true;
        break;
      case 'email':
        this.focusOnMessage = false;
        this.focusOnName = false;
        this.focusOnEmail = true;
        break;
      case 'message':
        this.focusOnEmail = false;
        this.focusOnName = false;
        this.focusOnMessage = true;
        break;
    }
  }

  blurInputfield(inputfield: 'name' | 'email' | 'message') {
    const fields = {
      name: this.nameField,
      email: this.emailField,
      message: this.messageField,
    };

    const field = fields[inputfield];
    if (field && field.nativeElement) {
      field.nativeElement.blur();
    }
    this.blurSettings();
  }

  blurSettings() {
    this.focusOnMessage = false;
    this.focusOnEmail = false;
    this.focusOnName = false;
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
}
