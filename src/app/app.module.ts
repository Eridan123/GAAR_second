import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HomeComponent} from "./components/home/home.component";
import {AboutComponent} from "./components/about/about.component";
import {DocumentComponent} from "./components/document/document.component";
import {ContactComponent} from "./components/contact/contact.component";
import {ResourcesComponent} from "./components/resources/resources.component";
import {ReactiveFormsModule} from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatGridListModule} from "@angular/material/grid-list";
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import {MatChipsModule} from "@angular/material/chips";
import {MatDividerModule} from "@angular/material/divider";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule } from '@angular/material/input';
import {HttpClientModule} from "@angular/common/http";
import {MatListModule} from "@angular/material/list";
import { SearchComponent } from './components/search/search.component';
import {NativeMonopolyComponent} from "./components/native-monopoly/native-monopoly.component";
import {DevExtremeModule} from "devextreme-angular";
import {DominateMonopolyComponent} from "./components/dominant-monopoly/dominant-monopoly.component";
import {GovernmentServiceComponent} from "./components/government-service/government-service.component";
import {ImportedProductComponent} from "./components/imported-product/imported-product.component";
import {
  PermissionDocumentsComponent
} from "./components/permission-document/permission-document.component";
import {ServiceComponent} from "./components/service/service.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    SearchComponent,
    DocumentComponent,
    ContactComponent,
    ResourcesComponent,
    NativeMonopolyComponent,
    DominateMonopolyComponent,
    GovernmentServiceComponent,
    PermissionDocumentsComponent,
    ImportedProductComponent,
    ServiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatCardModule,
    MatIconModule,
    MatChipsModule,
    MatDividerModule,
    HttpClientModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatListModule,
    DevExtremeModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
