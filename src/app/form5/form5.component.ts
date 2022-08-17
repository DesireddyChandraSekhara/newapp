import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
@Component({
  selector: 'app-form5',
  templateUrl: './form5.component.html',
  styleUrls: ['./form5.component.css']
})
export class Form5Component implements OnInit {

myform:any;
firstName:any;
lastName:any;
email:any;
password:any;
language:any;

langs:string[]=['English','French','Telugu'];

createFormControls(){
this.firstName=new FormControl('',Validators.required);
this.lastName=new FormControl('',Validators.max(10));
this.email=new FormControl('',Validators.required);
this.password=new FormControl('',[Validators.required,Validators.min(8)]);
this.language=new FormControl('');



}

createForms(){
  this.myform=new FormGroup({
   
    name:new FormGroup({
    firstname: this.firstName,
    lastName: this.lastName
    }),
    email:this.email,
    password:this.password,
    language:this.language
  })
}
  constructor() { }

  ngOnInit(): void {
    this.createFormControls();
    this.createForms();
  }

}
