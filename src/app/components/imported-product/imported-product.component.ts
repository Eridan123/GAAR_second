import {Component, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {datatableBuilderFunction, DatatableValuesModel} from '../base';
import DataSource from 'devextreme/data/data_source';
import ODataStore from 'devextreme/data/odata/store';
import {ActivatedRoute} from '@angular/router';

import notify from 'devextreme/ui/notify';
import {ImportedProduct, ImportedProductColumns, importedProductDatatableValues} from "./imported-product";
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-imported-product',
  templateUrl: '../document-list.html',
  styleUrls: ['../document-list.css']
})
export class ImportedProductComponent {

  private subscription: Subscription;
  datatableValues : DatatableValuesModel;

  constructor(
    private http: HttpClient,
    private activateRoute: ActivatedRoute) {
    this.subscription = activateRoute.params.subscribe(params => {
      this.datatableValues = importedProductDatatableValues;

      const imported = params.mtype === 'imported';
      this.datatableValues.title = imported ? this.datatableValues.titles[0] : this.datatableValues.titles[1];
      this.datatableValues.filterValue = [ [ 'Imported', '=', imported ], 'and', [ 'MarkAsDeleted', '=', false ] ];

      this.datatableValues = datatableBuilderFunction(this.datatableValues);
    });
  }
}
