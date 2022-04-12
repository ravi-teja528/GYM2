import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  contactForm = new FormGroup({
    name:new FormControl('name'),
    email: new FormControl(''),
    Message: new FormControl('good'),
  })
  send(){
    console.log(this.contactForm.value)
  }

}
