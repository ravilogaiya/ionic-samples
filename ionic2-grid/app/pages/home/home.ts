import {Page, NavController} from 'ionic-angular';
import {ProductTypeListComponent} from "../../components/product-type-list";
import {ProductDetailPage} from "../product-detail/product-detail";
import {ProductType} from '../../models/product-type';
import {SamplePagePage} from "../sample-page/sample-page";

@Page({
  templateUrl: 'build/pages/home/home.html',
  directives: [ProductTypeListComponent]
})
export class HomePage {
  constructor(private nav: NavController) {

  }

  onAddNewType() {
    this.nav.push(ProductDetailPage);
  }
}
