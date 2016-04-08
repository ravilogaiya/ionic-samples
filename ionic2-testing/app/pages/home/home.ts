import {Page, NavController} from 'ionic-angular';
import {SamplePage}  from "../sample/sample";

@Page({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
  constructor(private nav: NavController) {

  }

  onAddNewType() {
    this.nav.push(SamplePage);
  }
}
