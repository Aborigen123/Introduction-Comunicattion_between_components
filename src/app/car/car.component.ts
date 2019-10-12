import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})

export class CarComponent implements OnInit {

  // carName = 'Ford';
  // carYear = 2015;
////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // Block 3
  // tslint:disable-next-line:no-input-rename
  @Input('carItem') car: {name: string, year: number};

  constructor() {

  }

  ngOnInit() {
  }

}
