import { Component, Inject, OnInit } from '@angular/core';
import { Product } from '../../../shared/product';
import { CrudService } from '../../../shared/crud.service';
import { EditProductComponent } from '../../../models/EditProduct/edit-product/edit-product.component';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EditCategoryComponent } from '../../../models/EditCategory/edit-category/edit-category.component';
import { Category } from '../../../shared/category';
import { EditBrandComponent } from '../../../models/EditBrand/edit-brand/edit-brand.component';
import { Brand } from '../../../shared/brand';
import { DisplayViewComponent } from '../../MainDashboard/ProductView/display-view/display-view.component';
import { AddProductComponent } from '../../../models/AddProduct/add-product/add-product.component';
import { AddproductPopupComponent } from '../addproduct-popup/addproduct-popup.component';
import { AddSpecificationComponent } from '../AddSpecification/add-specification/add-specification.component';
import { ViewSpecificationComponent } from '../viewSpecification/view-specification/view-specification.component';

@Component({
  selector: 'app-inventory-dashboard',
  templateUrl: './inventory-dashboard.component.html',
  styleUrls: ['./inventory-dashboard.component.css']
})
export class InventoryDashboardComponent implements OnInit {

  products!: Product[];
  category!: Category[];
  brand!: Brand[];

  constructor(
    public crudApi: CrudService,
    private dialog: MatDialog
    ){ }

  ngOnInit() {
    this.crudApi.getProductsList().then(res =>{ 
      console.log('products',res);
      this.products = res;
    })

    this.crudApi.getBrandList().then(res => {
      console.log('brand', res);
      this.brand = res;
    })

    this.crudApi.getCategoryList().then(res => {
      console.log('category', res);
      this.category = res;
    })
    
  }

  removeProduct(productId: string){
      this.crudApi.DeleteProducts(productId);
      console.log("Clicked", productId);
  }

  removeBrand(brandId: string) {
    this.crudApi.DeleteBrand(brandId);
  }

  removeCategory(categoryId: string){
    this.crudApi.DeleteCategories(categoryId);
  }

  openProductDetail(productId: string) {
    const dialogRef = this.dialog.open(EditProductComponent,{
      data:{productId},
    })

    dialogRef.afterClosed().subscribe((result => {
      console.log('Dialog Box Closed');
    }))
  }

  openProductSpecificationDetails(productId: string) {
    this.dialog.open(ViewSpecificationComponent, {
      data: {productId},
    }) 
  }

  openCreateProductDetail() {
    const dialogRef = this.dialog.open(AddproductPopupComponent)

    dialogRef.afterClosed().subscribe((result => {
      console.log('Dialog Box Closed');
    }))
  }

  openCategoryDetail(categoryId: string) {
    const categoryRef = this.dialog.open(EditCategoryComponent, {
      data: {categoryId},
    })

    categoryRef.afterClosed().subscribe((result => {
      console.log("Category Box Closed");
    }))
  }

  openBrandDetail(brandId: string) {
    const brandRef = this.dialog.open (EditBrandComponent, {
      data: {brandId},
    })

    brandRef.afterClosed().subscribe((result => {
      console.log("Category Box Closed");
    }))
  }

  // passProductID (productId: string) {
  //   this.editProduct.getProductID(productId);
  // }

}
