import {Injectable} from 'angular2/core';
import {ProductType} from '../models/product-type';

@Injectable()
export class ProductTypeService {
  productTypes: ProductType[];

  constructor() {
    this.productTypes =  [
      new ProductType('Fruits & Vegetables', 'Potatos, Tomatos, Carrots, Cabbage', 'http://weightlossroutines.com/wp-content/uploads/2015/12/vegetabes.jpg'),
      new ProductType('Groceries', 'Rice, Dhal, Oil, Nuts', 'http://busykart.com/img/cms/1409722171.png'),
    ];
  }


  addProductType(productType: ProductType)
  {
    this.productTypes = [...this.productTypes, productType];
  }

  deleteProductType(productType: ProductType)
  {

  }
}
