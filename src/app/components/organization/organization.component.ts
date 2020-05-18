import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Organization,  OrganizationCollumns } from './organization';
import DataSource from 'devextreme/data/data_source';
import ODataStore from 'devextreme/data/odata/store';
import notify from 'devextreme/ui/notify';
import { environment } from 'src/environments/environment.prod';
import {ApiResponse} from "../base";

@Component({
  selector: 'app-organization',
  templateUrl: '../reference.html',
  styleUrls: ['../reference.css']
})
export class OrganizationComponent implements OnInit {

  title = 'Организации';
  subtitle = '';
  componentUrl = 'organization';
  componentItem: any = new Organization();
  rows = OrganizationCollumns;
  dxDataSource: DataSource;

  // Consts
  ngOnInit() {

    this.dxDataSource = new DataSource({
      store: new ODataStore({
          version: 4,
          key: 'Id',
          url: `${environment.apiUrl}/odata/${this.componentUrl}`
      }),
      select: [ 'Id', 'Name', 'IsFolder', 'Parent', 'INN', 'Adres', 'OrganizationProduct' ],
      filter: [ 'MarkAsDeleted', '=', false ]
    });
  }

  constructor(
      private http: HttpClient) {
  }

  delete(key): void {
    this.http.get<any>(`${environment.apiUrl}/${this.componentUrl}/delete/${key.row.data.Id}`)
      .subscribe( e => {
        const apiResponse: ApiResponse = e as ApiResponse;
        const type = apiResponse.hasError ? 'error' : 'success';
        notify(apiResponse.message, type, 2000);
        this.dxDataSource.reload();
      });
  }
}
