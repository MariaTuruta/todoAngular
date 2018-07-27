import {Component, Input, OnInit} from '@angular/core';
import Contacts from '../../../../shared/models/contacts';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  submitted = false;

  contacts: Contacts =
    {
      firstname: '',
      lastname: '',
      email: '',
      text: '',
    };

  constructor() {
  }

  onSubmit() {
    console.log(this.contacts);
    this.submitted = true;

    let alerta = '';
    for (const key of Object.keys(this.contacts)) {
      console.log(key);
      const val = this.contacts[key];
      if (!val || val.trim() === '') {
        alerta += `Please enter your ${key} \n`;
      }
    }
    if (alerta) {
      alert(alerta);
    }
  }

  ngOnInit() {
  }
}
