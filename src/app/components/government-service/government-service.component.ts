import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import DataSource from 'devextreme/data/data_source';
import ODataStore from 'devextreme/data/odata/store';
import {Subscription} from 'rxjs';
import {ActivatedRoute} from '@angular/router';

import notify from 'devextreme/ui/notify';
import {datatableBuilderFunction, DatatableValuesModel, DxColumn} from "../base";
import {environment} from "../../../environments/environment";
import {GovernmentService, GovernmentServiceColumns, governmentServiceDatatableValues} from "./government-service";

@Component({
  selector: 'app-government-service',
  templateUrl: '../document-list.html',
  styleUrls: ['../document-list.css']
})
export class GovernmentServiceComponent {

  private subscription: Subscription;
  datatableValues : DatatableValuesModel


  constructor(
    private http: HttpClient,
    private activateRoute: ActivatedRoute) {


    this.subscription = activateRoute.params.subscribe(params => {
      this.datatableValues = governmentServiceDatatableValues;

      const municipal = params.mtype !== 'state';
      this.datatableValues.title = municipal ? this.datatableValues.titles[1] : this.datatableValues.titles[0];
      this.datatableValues.filterValue = [ [ 'IsStateService', '=', municipal ], 'and', [ 'MarkAsDeleted', '=', false ]];
      this.datatableValues = datatableBuilderFunction(this.datatableValues);
    });
  }
}
