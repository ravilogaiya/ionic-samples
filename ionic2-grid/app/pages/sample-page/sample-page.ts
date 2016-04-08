import {Page, NavController} from 'ionic-angular';

/*
  Generated class for the SamplePagePage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/sample-page/sample-page.html',
})
export class SamplePagePage {
  static get parameters() {
    return [[NavController]];
  }

  constructor(nav) {
    
  }
}
