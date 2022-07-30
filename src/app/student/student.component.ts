import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  title="Hello"
  x1="this is value 1"
zz:string="";
   getvalue()
  {
      return 8;
  }
  fnCall(id:any){
    console.log("inside fncall" + id);
  }
  abc(event:any){
    console.log("inside abc",event.target.value)
  }
  keyupevent(event:any){
    console.log("inside keyup event");
  }

}
