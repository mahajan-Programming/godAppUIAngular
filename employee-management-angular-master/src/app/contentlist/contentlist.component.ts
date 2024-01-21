import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contentlist',
  templateUrl: './contentlist.component.html',
  styleUrls: ['./contentlist.component.css']
})
export class ContentlistComponent implements OnInit {
  panelOpenState: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
