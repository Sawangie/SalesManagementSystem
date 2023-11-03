import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './models/AddProduct/add-product/add-product.component';
import { EditProductComponent } from './models/EditProduct/edit-product/edit-product.component';
import { ProductListComponent } from './Pages/InventoryDashboard/product-list/product-list.component';
import { AddSpecificationComponent } from './models/AddSpecification/add-specification/add-specification.component';
import { BrandChartsComponent } from './Pages/MainDashboard/BarChartView/brand-charts/brand-charts.component';
import { ProductChartsComponent } from './Pages/MainDashboard/ProductCards/product-charts/product-charts.component';
import { OrderViewComponent } from './Pages/OrderDashboard/order-view/order-view.component';
import { UserProfileComponent } from './Pages/ProfileDashboard/user-profile/user-profile.component';
import { AnalyticsDashboardComponent } from './Pages/analytics-dashboard/analytics-dashboard/analytics-dashboard.component';
import { VoiceAudioComponent } from './models/voice-audio/voice-audio.component';

const routes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  // // {path: 'add-category', component: AddCategoryComponent},
  // // {path: 'add-brand', component: AddBrandComponent},
  {path: 'add-product', component: AddProductComponent},
  {path: 'dashboard', component: ProductChartsComponent },
  {path: 'inventory', component: ProductListComponent},
  {path: 'add-specification', component: AddSpecificationComponent},
  {path: 'view-brandChart', component: BrandChartsComponent},
  {path: 'view-productChart', component: ProductChartsComponent},
  {path: 'order', component: OrderViewComponent},
  {path: 'user-profile', component: UserProfileComponent},
  {path: 'analytics', component: AnalyticsDashboardComponent},
  {path: 'voice', component: VoiceAudioComponent}
  // {path: 'edit-product', component: EditProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
