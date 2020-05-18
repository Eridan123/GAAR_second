import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import DataSource from 'devextreme/data/data_source';
import ODataStore from 'devextreme/data/odata/store';
import {Subscription} from 'rxjs';
import {ActivatedRoute} from '@angular/router';

import notify from 'devextreme/ui/notify';
import {DxColumn} from "../base";
import {environment} from "../../../environments/environment.prod";
import {GovernmentService, GovernmentServiceColumns} from "./government-service";

@Component({
  selector: 'app-government-service',
  templateUrl: '../document-list.html',
  styleUrls: ['../document-list.css']
})
export class GovernmentServiceComponent {

  private subscription: Subscription;

  titles = ['Государственные платные услуги', 'Муниципальные платные услуги'];
  title: string;
  subtitle = '';
  componentItem: GovernmentService = new GovernmentService();
  rows: DxColumn[] = GovernmentServiceColumns;
  dxDataSource: DataSource;


  constructor(
    private http: HttpClient,
    private activateRoute: ActivatedRoute) {

    this.subscription = activateRoute.params.subscribe(params => {

      const municipal = params.mtype !== 'state';
      this.title = municipal ? this.titles[1] : this.titles[0];
      this.componentItem.isStateService = municipal;

      this.dxDataSource = new DataSource({
        store: new ODataStore({
          version: 4,
          key: 'Id',
          url: `${environment.apiUrl}/odata/governmentServiceview`,
          beforeSend: (e) => {
            e.headers = {
              'Access-Control-Allow-Origin':'*',
            };
          },
          onLoaded: () => {  }
        }),
        filter: [ [ 'IsStateService', '=', municipal ], 'and', [ 'MarkAsDeleted', '=', false ] ],
        sort: [ { selector: 'Id', desc: true } ]
      });
    });
  }
}
