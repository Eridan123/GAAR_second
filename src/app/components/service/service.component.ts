import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Service, ServiceColumns, serviceDatatableValues} from './service';
import { Organization } from '../organization/organization';
import ODataStore from 'devextreme/data/odata/store';
import DataSource from 'devextreme/data/data_source';
import notify from 'devextreme/ui/notify';
import {
  datatableBuilderFunction,
  DatatableValuesModel,
} from "../base";

export let serviceTerm: string[] = ['Бесплатно', 'Платно'];

@Component({
  selector: 'app-service',
  templateUrl: '../reference.html',
  styleUrls: ['../reference.css']
})
export class ServiceComponent implements OnInit {

  constructor() {
  }

  // Settings
  datatableValues :DatatableValuesModel;

  // Consts
  ngOnInit() {
    this.datatableValues = serviceDatatableValues;
    this.datatableValues = datatableBuilderFunction(this.datatableValues);
  }
}
