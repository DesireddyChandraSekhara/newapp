import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-size',
  templateUrl: './size.component.html',
  styleUrls: ['./size.component.css']
})
export class SizeComponent implements OnInit {

  //size=10;
  @Input() size!:number;
  constructor() { }

  ngOnInit(): void {
  }

}
