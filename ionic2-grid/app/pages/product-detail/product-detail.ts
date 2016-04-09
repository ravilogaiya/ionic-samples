import {Page, NavController, NavParams} from 'ionic-angular';
import {ProductType} from "../../models/product-type";
import {OnInit} from "angular2/core";
import {FormBuilder, ControlGroup, Validators} from "angular2/common";
import {ProductTypeService} from "../../services/product-type-service";

/*
  Generated class for the ProductDetailPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/product-detail/product-detail.html'
})
export class ProductDetailPage implements OnInit {
  productTypeDetailForm: ControlGroup;
  productType : ProductType;
  editMode: string;

  static get parameters() {
    return [[NavController], [NavParams], [FormBuilder], [ProductTypeService]];
  }

  constructor(private nav, private navParams, private formBuilder, private productTypeService) {
      var localProductType = navParams.get('pt');
      if (typeof localProductType === "undefined") {
        this.productType = null;
        this.editMode = "create";
        this.productType = {name: '', description: '', image: ''};
      } else {
          this.productType = localProductType;
          this.editMode = "edit";
      }
    }

  onSubmit(event) {
    console.log("Form Value Name = " + this.productTypeDetailForm.controls['name'].value);
    console.log("Form Value Description = " + this.productTypeDetailForm.controls['description'].value);
    console.log("Form Value Image = " + this.productTypeDetailForm.controls['image'].value);

    this.productType.name = this.productTypeDetailForm.controls['name'].value;
    this.productType.description = this.productTypeDetailForm.controls['description'].value;
    this.productType.image = this.productTypeDetailForm.controls['image'].value;

    if (this.editMode === 'create')
    {
      this.productTypeService.addProductType(this.productType);
      this.editMode = 'edit';
    }
  }

  onDelete() {
    if (this.editMode === 'edit')
    {
      this.productTypeService.deleteProductType(this.productType);
      this.editMode = 'create';
    }
  }

  ngOnInit() : any {
    let fbName = '';
    let fbDescription = '';
    let fbImage = '';

    if (this.editMode === 'edit') {
      fbName = this.productType.name;
      fbDescription = this.productType.description;
      fbImage = this.productType.image;
    }

    this.productTypeDetailForm = this.formBuilder.group({
      name: [fbName, Validators.required],
      description: [fbDescription, Validators.required],
      image: [fbImage, Validators.required]
    })
  }
}
