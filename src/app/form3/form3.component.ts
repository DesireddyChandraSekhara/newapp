import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form3',
  templateUrl: './form3.component.html',
  styleUrls: ['./form3.component.css']
})
export class Form3Component implements OnInit {

  address = new Address('', '', '', '');
  member = new Member('', '', this.address);
  membershipForm:FormGroup;
  submitted = false;
  
  constructor(private fb:FormBuilder) { 
this.membershipForm=this.fb.group({
name:[''],
email:[''],
address:this.fb.group ({
  houseNo:[''],
  city:[''],
  state:[''],
  pincode:['']
})
})

}

  ngOnInit(): void {
  }
  onSubmit() :void{
    this.submitted = true;
    this.member.name = this.membershipForm.value.name;
    this.member.email = this.membershipForm.value.email;
    this.member.address.houseNo = this.membershipForm.value.address.houseNo;
    this.member.address.city = this.membershipForm.value.address.city;
    this.member.address.state = this.membershipForm.value.address.state;
    this.member.address.pincode = this.membershipForm.value.address.pincode;
 
    console.log(this.submitted ,this.member.name )
   
  }
}

export class Address{
  houseNo:string;
  city:string;
  state:string;
  pincode:string;
  constructor(houseNo :string,city:string,state:string,pincode:string)
  {
    this.houseNo=houseNo;
    this.city=city;
    this.state=state;
    this.pincode=pincode;
  }

}

export class Member{
  name:string;
  email:string;
  address:Address;
  
  constructor(name :string,email:string,address:Address)
  {
    this.name=name;
    this.email=email;
    this.address=address;
  }
}
