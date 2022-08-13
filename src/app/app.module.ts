import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnotherComponent } from './another/another.component';
import { StudentComponent } from './student/student.component';
import { SizeComponent } from './size/size.component';
import { ProductComponent } from './product/product.component';
import { Form2Component } from './form2/form2.component';
import { FormsModule, ReactiveFormsModule,FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Form3Component } from './form3/form3.component';
import { Form4Component } from './form4/form4.component';

@NgModule({
  declarations: [
    AppComponent,
    AnotherComponent,
    StudentComponent,
    SizeComponent,
    ProductComponent,
    Form2Component,
    Form3Component,
    Form4Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
