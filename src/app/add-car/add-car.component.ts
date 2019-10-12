import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit {
  carName = '';
  carYear = 2017;
  // tslint:disable-next-line:no-output-on-prefix no-output-rename
  @Output('onAddCar') carEmitter = new EventEmitter<{name: string, year: number}>();//<{name: string, year: number}>  буде вертати

  addCar() {

    this.carEmitter.emit({
      name: this.carName,
      year: this.carYear
    });
    console.log('onAddCar in add-car');
    this.carName = '';
    this.carYear = 2017;
  }
  constructor() { }

  ngOnInit() {
  }

}
