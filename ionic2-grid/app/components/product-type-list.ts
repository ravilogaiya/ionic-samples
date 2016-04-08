import {Component, Input} from 'angular2/core';
import {ProductTypeService} from '../services/product-type-service';
import {ProductTypeListRender} from './product-type-list-render';
import {ProductType} from "../models/product-type";

@Component({
    selector:'product-type-list',
    directives :[ProductTypeListRender],
    template:`
    <ion-row responsive-md *ngFor="#productType of productTypes; #i = index">
       <ion-col width-25 *ngIf="i%4 == 0 && i < productTypes.length" >
          <product-type-list-render [productType]="productTypes[i]"></product-type-list-render>
       </ion-col>
       <ion-col width-25 *ngIf="i%4 == 0 && i+1 < productTypes.length" >
          <product-type-list-render [productType]="productTypes[i+1]"></product-type-list-render>
       </ion-col>
       <ion-col width-25 *ngIf="i%4 == 0 && i+2 < productTypes.length" >
          <product-type-list-render [productType]="productTypes[i+2]"></product-type-list-render>
       </ion-col>
       <ion-col width-25 *ngIf="i%4 == 0 && i+3 < productTypes.length" >
          <product-type-list-render [productType]="productTypes[i+3]"></product-type-list-render>
       </ion-col>
    </ion-row>
    `,
    providers: [ProductTypeService]
})
export class ProductTypeListComponent {

    productTypes: ProductType[];

    constructor(productTypeService:ProductTypeService){
      this.productTypes = productTypeService.productTypes;
    }
}
