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
    // const headerBg = document.getElementById('bg1');
    // window.addEventListener('scroll', () => {
    //   headerBg.style.opacity = 1 - window.pageYOffset + 'px';
    // });
  }
}
