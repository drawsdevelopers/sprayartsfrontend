'use strict';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    const element = document.getElementById('bgVideo');
    // tslint:disable-next-line: no-string-literal
    element['muted'] = true;
    // tslint:disable-next-line: no-string-literal
    element['autoplay'] = true;

    console.log(element);
  }
}
