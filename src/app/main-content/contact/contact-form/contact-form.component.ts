import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss',
})
export class ContactFormComponent {
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
