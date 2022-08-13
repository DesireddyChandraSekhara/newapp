import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form4',
  templateUrl: './form4.component.html',
  styleUrls: ['./form4.component.css']
})
export class Form4Component implements OnInit {

name = 'Angular';
resultjson:string='';
productForm: FormGroup;
constructor (private fb: FormBuilder) {
this.productForm = this.fb.group({
name:"",
quantities: this.fb.array([]), });
}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }


quantities(): FormArray {
return this.productForm.get ("quantities") as FormArray}

newQuantity(): FormGroup { 
  return this.fb.group({
    qty: '', 
    price: ''
  })
}

addQuantity () {
this.quantities ().push(this.newQuantity());
}
removeQuantity (i:number) {
this.quantities ().removeAt(i);
this.resultjson=this.productForm.value;
}
onSubmit() {
console.log(this.productForm.value);
this.resultjson=this.productForm.value;
}


}
