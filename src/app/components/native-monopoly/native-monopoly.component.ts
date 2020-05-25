import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import DataSource from 'devextreme/data/data_source';
import ODataStore from 'devextreme/data/odata/store';
import {Subscription} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {NativeMonopoly, NativeMonopolyColumns, nativeMonopolyDatatableValues} from "./native-monopoly";
import {
  ApiResponse,
  datatableBuilderFunction,
  DatatableValuesModel,
} from "../base";
import {environment} from "../../../environments/environment";


@Component({
  selector: 'app-native-monopoly',
  templateUrl: '../document-list.html',
  styleUrls: ['../document-list.css']
})
export class NativeMonopolyComponent {


  datatableValues :DatatableValuesModel;

  // ******************* Settings *********************************

  constructor() {
    this.datatableValues = nativeMonopolyDatatableValues;
    this.datatableValues = datatableBuilderFunction(this.datatableValues);
  }

}
