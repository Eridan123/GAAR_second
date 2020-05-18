import { Component, OnInit } from '@angular/core';
import { PermissionDocument,  PermissionDocumentColumns } from './permission-document';
import { HttpClient } from '@angular/common/http';
import DataSource from 'devextreme/data/data_source';
import ODataStore from 'devextreme/data/odata/store';

import notify from 'devextreme/ui/notify';
import {DxColumn} from "../base";
import {environment} from "../../../environments/environment.prod";

@Component({
  selector: 'app-permission-document',
  templateUrl: '../document-list.html',
  styleUrls: ['../document-list.css']
})
export class PermissionDocumentsComponent implements OnInit {

  // Settings
  title = 'Cтоимости разрешительных документов';
  subtitle = '';
  componentUrl = 'PermissionDocument';
  newButton: string;
  buttons: any;
  componentItem: any = new PermissionDocument();
  rows: DxColumn[] = PermissionDocumentColumns;


  dxDataSource: DataSource;

  // Consts
  ngOnInit() {

    this.dxDataSource = new DataSource({
      store: new ODataStore({
        version: 4,
        key: 'Id',
        url: `${environment.apiUrl}/odata/${this.componentUrl}`,
        onLoaded: () => {  }
      }),
      select: [ 'Id', 'Organization', 'Product', 'OrderDocument', 'Price' ],
      expand: [ 'Organization', 'Product', 'OrderDocument' ],
      filter: [ 'MarkAsDeleted', '=', false ],
      sort: [ { selector: 'Id', desc: true } ]
    });
  }

  constructor(
    private http: HttpClient) {
  }
}
