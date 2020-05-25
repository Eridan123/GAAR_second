import { Component, OnInit } from '@angular/core';
import {PermissionDocument, PermissionDocumentColumns, permissionDocumentDatatableValues} from './permission-document';
import { HttpClient } from '@angular/common/http';
import DataSource from 'devextreme/data/data_source';
import ODataStore from 'devextreme/data/odata/store';

import notify from 'devextreme/ui/notify';
import {datatableBuilderFunction, DatatableValuesModel} from "../base";
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-permission-document',
  templateUrl: '../document-list.html',
  styleUrls: ['../document-list.css']
})
export class PermissionDocumentsComponent implements OnInit {

  // Settings
  datatableValues : DatatableValuesModel;


  // Consts
  ngOnInit() {
    this.datatableValues = permissionDocumentDatatableValues;
    this.datatableValues = datatableBuilderFunction(this.datatableValues);
  }

  constructor() {
  }
}
