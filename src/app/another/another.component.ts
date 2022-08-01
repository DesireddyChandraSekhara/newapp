import { getLocaleDateFormat } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Test } from './test';
@Component({
  selector: 'app-another',
  templateUrl: './another.component.html',
  styleUrls: ['./another.component.css']
})
export class AnotherComponent implements OnInit {

  constructor() { }


  list =[1,2,3,4,5,6,7,8,9]
  people:any []=[

    {
       "name":"name1","age":30

    },
    {"name":"name2","age":50 },
    {"name":"name3","age":10 },
    {"name":"name4","age":20 },
    {"name":"name5","age":60 }

  ];


  logInName:string= "user1";

  user:Test[]=[
    {"userId":12,"userName":"user1"},
    {"userId":13,"userName":"user2"}

  
  ]
  currenecyValue=4.6789;
  todaydate=new Date();

  jsonValue={"x1":10,"x2":20,"x3":40,"xx":{"y1":10,"y2":30}}
  
  ngOnInit(): void {
  }

}
