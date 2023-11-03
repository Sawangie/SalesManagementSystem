import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../../shared/crud.service';
import { MatDialog } from '@angular/material/dialog';
import { EditBrandComponent } from '../../../models/EditBrand/edit-brand/edit-brand.component';
import { Brand } from '../../../shared/brand';

@Component({
  selector: 'app-brand-table',
  templateUrl: './brand-table.component.html',
  styleUrls: ['./brand-table.component.css']
})
export class BrandTableComponent implements OnInit {

  brand!: Brand[];

  constructor(
    public crudApi: CrudService,
    private dialog: MatDialog
  ) { }

  ngOnInit() {
    // this.crudApi.getBrandLists().subscribe((brands: Brand[]) => {
    //   console.log('brand', brands);
    //   this.brand = brands;
    // });

    this.crudApi.getBrands().subscribe(res => {
      console.log('brand', res);
      this.brand = res;
    })
  }

  removeBrand(brandId: string) {
    this.crudApi.DeleteBrand(brandId);
  }

  openBrandDetail(brandId: string) {
    const brandRef = this.dialog.open (EditBrandComponent, {
      data: {brandId},
    })

    brandRef.afterClosed().subscribe((result => {
      console.log("Category Box Closed");
    }))
  }

}
