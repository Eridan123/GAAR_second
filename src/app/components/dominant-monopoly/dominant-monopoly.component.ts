import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import DataSource from 'devextreme/data/data_source';
import ODataStore from 'devextreme/data/odata/store';
import {DominantMonopolyColumns, dominantMonopolyDatatableValues} from './dominant-monopoly';
import {Subscription} from 'rxjs';
import {ActivatedRoute} from '@angular/router';

import {datatableBuilderFunction, DatatableValuesModel, DxColumn} from "../base";
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-dominate-monopoly',
  templateUrl: '../document-list.html',
  styleUrls: ['../document-list.css']
})
export class DominateMonopolyComponent {

  datatableValues : DatatableValuesModel;



  // ******************* Settings *********************************
  constructor() {
    this.datatableValues = dominantMonopolyDatatableValues;
    this.datatableValues = datatableBuilderFunction(this.datatableValues);

  }
}
