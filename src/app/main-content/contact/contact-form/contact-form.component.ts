import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  inject,
} from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { NotificationComponent } from './notification/notification.component';
import { TranslateModule } from '@ngx-translate/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [CommonModule, FormsModule, NotificationComponent, TranslateModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss',
})
export class ContactFormComponent {
  http = inject(HttpClient);
  focusOnName = false;
  focusOnEmail = false;
  focusOnMessage = false;
  @ViewChild('Name_Input') nameField!: ElementRef;
  @ViewChild('Email_Input') emailField!: ElementRef;
  @ViewChild('Message_Input') messageField!: ElementRef;
  /* isPrivacyPolicyGerman: boolean = false; */

  constructor(private translateService: TranslateService) {}

  isGerman() {
    return this.translateService.currentLang === 'de';
  }

  isSpanish() {
    return this.translateService.currentLang === 'es';
  }

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

  mailTest = false;

  post = {
    endPoint: 'https://dimitrios-kapetanis.com/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      this.http
        .post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            ngForm.resetForm();
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
      this.messageWasSentSuccessfully();
      ngForm.resetForm();
    }
  }

  messageSent: boolean = false;
  messageWasSentSuccessfully() {
    this.messageSent = true;
    setTimeout(() => {
      this.messageSent = false;
    }, 4000);
  }
}
