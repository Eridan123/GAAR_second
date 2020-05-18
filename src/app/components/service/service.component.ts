import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Service, ServiceColumns } from './service';
import { Organization } from '../organization/organization';
import ODataStore from 'devextreme/data/odata/store';
import DataSource from 'devextreme/data/data_source';
import notify from 'devextreme/ui/notify';
import {DxColumn} from "../base";
import {environment} from "../../../environments/environment.prod";

export let serviceTerm: string[] = ['Бесплатно', 'Платно'];

@Component({
  selector: 'app-service',
  templateUrl: '../reference.html',
  styleUrls: ['../reference.css']
})
export class ServiceComponent implements OnInit {

  constructor(
    private http: HttpClient) {
  }

  organizations: Organization[];

  // Settings
  title = 'ЕДИНЫЙ РЕЕСТР (ПЕРЕЧЕНЬ)';
  subtitle = 'государственных услуг, оказываемых государственными органами, их структурными подразделениями и подведомственными учреждениями';
  componentUrl = 'service';
  newButton = 'Добавить организацию';
  componentItem: any = new Service();
  rows: DxColumn[] = ServiceColumns;
  dxDataSource: DataSource;

  getOrganizations() {
    this.http.get<any>(`${environment.apiUrl}/organization/value`)
    .subscribe(resp => { this.organizations = resp; });
  }

  customText(cellInfo) {
    return cellInfo.value === 'Free' ? 'Бесплатно' : 'Платное';
  }

  // Consts
  ngOnInit() {

    this.dxDataSource = new DataSource({
      store: new ODataStore({
          version: 4,
          key: 'Id',
          url: `${environment.apiUrl}/odata/${this.componentUrl}`
      }),
      select: [ 'Id', 'Name', 'IsFolder', 'Parent', 'Section', 'ServiceTerm', 'ServiceTermString', 'Comment', 'AuthorizedOrganization' ],
      expand: [ 'AuthorizedOrganization' ],
      filter: [ 'MarkAsDeleted', '=', false ]
    });
  }
}
