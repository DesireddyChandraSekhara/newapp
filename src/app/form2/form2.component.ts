import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.css']
})
export class Form2Component implements OnInit {

  contactForm = new FormGroup(
    {
     firstname:new FormControl(),
     lastname:new FormControl(),
     email:new FormControl(), 
     gender:new FormControl(),
     isMarried:new FormControl(),
     country:new FormControl()
    }
  )

  onSUbmit(){
    console.log("Inside Submit",this.contactForm.value)
  }
  constructor() { }

  ngOnInit(): void {
  }

}