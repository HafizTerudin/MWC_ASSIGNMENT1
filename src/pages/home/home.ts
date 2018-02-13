import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import {TestPagePage} from '../test-page/test-page';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  
}
export class TestPage{
  testPagePage=TestPagePage;
  constructor(){

  }
}