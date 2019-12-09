import { Component, OnInit } from '@angular/core';
import { FesticketService } from 'src/app/shared/services/festicket.service';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent implements OnInit {
  constructor(private festicketService: FesticketService) {}

  ngOnInit() {
    // this.festicketService
    //   .getMenu()
    //   .subscribe(response => {
    //     console.log(response);
    //   });
  }
}
