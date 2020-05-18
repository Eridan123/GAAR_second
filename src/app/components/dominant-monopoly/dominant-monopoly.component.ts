import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import DataSource from 'devextreme/data/data_source';
import ODataStore from 'devextreme/data/odata/store';
import {  DominantMonopolyColumns } from './dominant-monopoly';
import {Subscription} from 'rxjs';
import {ActivatedRoute} from '@angular/router';

import {DxColumn} from "../base";
import {environment} from "../../../environments/environment.prod";

@Component({
  selector: 'app-dominate-monopoly',
  templateUrl: '../document-list.html',
  styleUrls: ['../document-list.css']
})
export class DominateMonopolyComponent {

  private subscription: Subscription;
  titles = ['Республиканский реестр', 'Региональный реестр'];
  title: string;
  subtitle = 'субъектов занимающих доминирующее положение на товарных рынках Кыргызской Республики';
  componentUrl = 'dominantmonopoly';
  rows: DxColumn[] = DominantMonopolyColumns;


  dxDataSource: DataSource;

  // ******************* Settings *********************************
  constructor(
    private http: HttpClient,
    private activateRoute: ActivatedRoute,) {

    this.subscription = activateRoute.params.subscribe(params => {
      this.dxDataSource = new DataSource({
        store: new ODataStore({
          version: 4,
          key: 'Id',
          url: `${environment.apiUrl}/odata/${this.componentUrl}`,
        }),
        expand: [ 'Organization', 'Product', 'Region', 'IncludeOrder', 'ExcludeOrder', 'CorrectOrder' ],
        filter: [ [ 'MarkAsDeleted', '=', false ] ],
        sort: [ { selector: 'Id', desc: true } ]
      });
    });
  }
}
