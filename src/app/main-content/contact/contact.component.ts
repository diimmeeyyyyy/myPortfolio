import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
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
