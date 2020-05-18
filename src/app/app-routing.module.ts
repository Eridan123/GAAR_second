import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ContactComponent} from "./components/contact/contact.component";
import {ResourcesComponent} from "./components/resources/resources.component";
import {DocumentComponent} from "./components/document/document.component";
import {AboutComponent} from "./components/about/about.component";
import {HomeComponent} from "./components/home/home.component";
import { SearchComponent } from './components/search/search.component';
import {NativeMonopolyComponent} from "./components/native-monopoly/native-monopoly.component";
import {DominantMonopoly} from "./components/dominant-monopoly/dominant-monopoly";
import {GovernmentServiceComponent} from "./components/government-service/government-service.component";
import {ImportedProductComponent} from "./components/imported-product/imported-product.component";
import {
  PermissionDocumentsComponent
} from "./components/permission-document/permission-document.component";
import {DominateMonopolyComponent} from "./components/dominant-monopoly/dominant-monopoly.component";
import {ServiceComponent} from "./components/service/service.component";


const routes: Routes = [
{
    path: '',
    component: HomeComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },{
    path: 'document',
    component: DocumentComponent,
  },{
    path: 'resource',
    component: ResourcesComponent,
  },{
    path: 'contact',
    component: ContactComponent,
  },{
    path: 'search',
    component: SearchComponent,
  },
  {
    path: 'nativemonopoly',
    component: NativeMonopolyComponent,
  },
  {
    path: 'dominantmonopoly',
    component: DominateMonopolyComponent,
  },
  {
    path: 'governmentservices/:mtype',
    component: GovernmentServiceComponent,
  },
  {
    path: 'importedproducts/:mtype',
    component: ImportedProductComponent,
  },
  {
    path: 'permissiondocument',
    component: PermissionDocumentsComponent,
  },
  {
    path: 'services',
    component: ServiceComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
