import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import DataSource from 'devextreme/data/data_source';
import ODataStore from 'devextreme/data/odata/store';
import {Subscription} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {NativeMonopoly, NativeMonopolyColumns} from "./native-monopoly";
import {ApiResponse, DxColumn} from "../base";
import {environment} from "../../../environments/environment.prod";


@Component({
  selector: 'app-native-monopoly',
  templateUrl: '../document-list.html',
  styleUrls: ['../document-list.css']
})
export class NativeMonopolyComponent {

  private subscription: Subscription;


  titles = ['Республиканский реестр', 'Региональный реестр'];
  title: string;
  subtitle = 'субъектов естественных монополий в Кыргызской Республики';
  componentUrl = 'nativemonopoly';
  newButton = 'Добавить организацию';
  componentItem: NativeMonopoly = new NativeMonopoly();
  rows: DxColumn[] = NativeMonopolyColumns;

  dxDataSource: DataSource;


  // ******************* Settings *********************************

  constructor(private http: HttpClient,
              private activateRoute: ActivatedRoute) {

    this.subscription = activateRoute.params.subscribe(params => {
      this.dxDataSource = new DataSource({
        store: new ODataStore({
          version: 4,
          key: 'Id',
          url: `${environment.apiUrl}/odata/NativeMonopolyView`,
          beforeSend: (e) => {
            e.headers = {
              'Access-Control-Allow-Origin':'*',
            };
          },
        }),
        filter: [  [ 'MarkAsDeleted', '=', false ] ],
        sort: [ { selector: 'Id', desc: true } ]
      });
    });

  }

}
