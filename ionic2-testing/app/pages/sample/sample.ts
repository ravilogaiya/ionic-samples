import {Page, NavController} from 'ionic-angular';

/*
  Generated class for the SamplePage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/sample/sample.html',
})
export class SamplePage {
  static get parameters() {
    return [[NavController]];
  }

  constructor(nav) {
  }
}
