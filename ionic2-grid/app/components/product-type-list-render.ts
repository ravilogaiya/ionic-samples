import {Component, Input, Output, EventEmitter} from 'angular2/core';
import {ProductType} from "../models/product-type";
import {Page, NavController} from 'ionic-angular';
import {ProductDetailPage} from "../pages/product-detail/product-detail";

@Component({
    selector: 'product-type-list-render',
    template:`
                <div class=product-type-container  (click)="gotoDetails(productType)">
                    <img [src]="productType.image" alt="" width="100%" height="auto">
                    <h1>{{productType.name}}</h1>
                    <p>{{productType.description}}</p>
                </div>

                `
})
export class ProductTypeListRender {
    @Input() productType;
    @Output() toggle = new EventEmitter();

    constructor(private nav :NavController){
    }

    gotoDetails(pt) {
      // console.log("product type = " + pt.name + ", decription = " + pt.description);
      this.nav.push(ProductDetailPage, { pt });
    }
}
