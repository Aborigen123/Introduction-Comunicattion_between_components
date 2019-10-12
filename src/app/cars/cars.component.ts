import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css'],
 // encapsulation: ViewEncapsulation.None -- css style стають глобальними
})
export class CarsComponent implements OnInit {



 // canAddCar = false;

//   inputText = '';
//
//   addCarStatus = '';
//
//   carName = '';
//
//  addCarStatus2 = false;
//
//  cars = ['Ford', 'Audi', 'BMW', 'Mazda'];
//
//   items = [{id: 1, name: 'qwe1'},{id: 2, name: 'qwe2'},{id: 3, name: 'qwe3'}];
//   dates = [
//    new Date(2015, 3, 4).toDateString(),
//
//    new Date(2015, 1, 29).toDateString(),
//
//    new Date(2015, 2, 14).toDateString(),
//
//    new Date(2015, 5, 2).toDateString(),
//
//    new Date(2015, 6, 12).toDateString(),
//  ]
//
//   addCar(carName: string) {
//     this.cars.push(this.carName)
//     this.carName = ''; // для того щоб інпут був пустим
// if (carName === '') {
//   this.addCarStatus2 = false;
// } else {
//   this.addCarStatus2 = true;
// }
//   }
//
//   Event() {
//     if (this.addCarStatus === '') {
//       this.addCarStatus = 'Added Car';
//     } else {
//       this.addCarStatus = '';
//     }
//   }
//
//   setBigCarText(car: string) {
//     return car.length > 4 ? true : false;
//   }
//   onKeyUp(event: Event) {
//
// this.inputText =  (event.target as HTMLInputElement).value;
//   }
//   onKeyUp2(event) {
//
//     this.inputText =  event;
//   }
//   onKeyOnEnter(event) {
// if (event.code === 'Enter') {
//   this.inputText =  event.target.value;
// }
//   }
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // Block 3

  // carName = ''; не потрібні тому що в block 3 video 15 ми переносимо в add-car.component
  // carYear = 2017;

  // addCar() {не потрібні тому що в block 3 video 15 ми переносимо в add-car.component
  //
  //   this.cars.push({name : this.carName, year: this.carYear});
  //   this.carName = '';
  //   this.carYear = 2017;
  // }

  // @ts-ignore
  cars: [{name: string, year: number}] = [
    {name: 'Ford', year: 2015},
    {name: 'Audi', year: 2010},
    {name: 'BMW', year: 2017},
    {name: 'Mazda', year: 2018},
  ];

  updateCarList(car: {name: string, year: number}) {
    console.log('updateCarList in cars');
    this.cars.push(car);
  }
  constructor() {


  }
  ngOnInit() {
  }

}
