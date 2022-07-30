import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnotherComponent } from './another/another.component';
import { StudentComponent } from './student/student.component';
import { SizeComponent } from './size/size.component';

@NgModule({
  declarations: [
    AppComponent,
    AnotherComponent,
    StudentComponent,
    SizeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
