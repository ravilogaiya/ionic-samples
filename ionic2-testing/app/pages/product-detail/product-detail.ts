import {Page, NavController, NavParams} from 'ionic-angular';
import {ProductType} from "../../models/product-type";
import {OnInit} from "angular2/core";

/*
  Generated class for the ProductDetailPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/product-detail/product-detail.html',
  inputs: ['productType']
})
export class ProductDetailPage {
  productType : ProductType;

  static get parameters() {
    return [[NavController], [NavParams]];
  }

  constructor(private nav, private navParams) {
      //this.productType = navParams.get('pt');
      this.productType = {name: "F&V", description: "11111", image: ""};
      console.log(this.productType.description);
    }
}
