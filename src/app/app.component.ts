import { Component } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'gym2';
  contactForm = new FormGroup({
    name:new FormControl('name'),
    email: new FormControl(''),
    Message: new FormControl('good'),
  })
  send(){
    console.log(this.contactForm.value)
  }
}
