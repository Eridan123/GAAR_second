import {Validators} from '@angular/forms';
import {environment} from "../../environments/environment.prod";
import {ServiceColumns} from "./service/service";
import DataSource from "devextreme/data/data_source";
import ODataStore from "devextreme/data/odata/store";
import DevExpress from "devextreme";
import data = DevExpress.data;
import {HttpClient} from "@angular/common/http";

export function renderOrder(order: any) {
  return '№' + order.orderNumber + ',  от ' + new Date(order.documentDate).toLocaleDateString() + ' - "' + order.comments + '"';
}
export interface ApiResponse {
  hasError: boolean;
  message: string;
}
export interface DxColumn {
  fieldName: string;
  caption: string;
  width?: string;
  customizeText?: any;
  calculateCellValue?: any;
  calculateDisplayValue?: any;
  visible?: boolean;
}

export class Base {
  id = 0;
}
export class Attachment extends Base {
  name: string;
}
export class Reference extends Base {
  parent = 0;
  isFolder = false;
  name: string;
}
export class DocumentBase extends Base {
  documentDate: Date = new Date();
}
export class Monopoly extends DocumentBase {
  isRegional = false;
  organization: number;
  region: number;
  product: number;
  includeOrder: any;
  excludeOrder: any;
  correctOrder: any;
}

const BASE_COLUMNS = [
  { data : 'id', name : 'Id', width: '10px', render(data) { return ''; } },
  {
    data: 'id',
    name: 'Id',
    width: '30px',
    searchable : false,
    title: '',
    render(data: any) {
      return '<button class="mat-icon-button mat-primary material-icons" view-id="' + data + '">label</button>';
    }
  }
];
const REFERENCE_COLUMNS = [ ...BASE_COLUMNS, { data : 'name', name : 'Name', title : 'Название' }];
const DOCUMENT_COLUMNS = [ ...BASE_COLUMNS ];
const ORDER_DOCUMENT_COLUMNS = [
  ...BASE_COLUMNS,
  { data : 'documentDate', name : 'DocumentDate', title : 'Дата',
    render(data) {
      return data ? new Date(data).toLocaleDateString() : '';
    }
  },
  { data : 'orderNumber', name : 'OrderNumber', title : '№', render(data) { return '№' + data; } },
  { data : 'comments', name : 'Comments', title : 'Примечание' },
  { data : 'attachments', name : 'Attachments', title : 'Прикрепление',
    render(data) {
      let str = '';

      if (data) {
        str = '<ul>';
        data.forEach(element => {
          str = str + `<li><a href="${environment.apiUrl}/attachment/download/${element.id}" target="_blank">${element.name}</a>`;
        });

        str = str + '</ul>';
      }

      return str;
    }
  },
];
export
{
  BASE_COLUMNS,
  REFERENCE_COLUMNS,
  DOCUMENT_COLUMNS,
  ORDER_DOCUMENT_COLUMNS
};

// Datatable draw model
export class DatatableValuesModel {
  constructor(titles, title, subtitle, componentUrl, rows, selectFields, sortValues, filterValue, expandValues) {
    this.titles = titles;
    this.title = title;
    this.subtitle = subtitle;
    this.componentUrl = componentUrl;
    this.rows = rows;
    this.selectFields = selectFields;
    this.sortValues = sortValues;
    this.filterValue = filterValue;
    this.expandValues = expandValues;

  }

  hasData : boolean = true;
  titles : string[];
  title : string;
  subtitle : string;
  componentUrl : string;
  rows : DxColumn[];
  dxDataSource : DataSource;
  selectFields : any;
  sortValues : any;
  filterValue : any;
  expandValues : any;
}

// Datatable drawer function
export function datatableBuilderFunction(datatableValues : DatatableValuesModel) {

  datatableValues.dxDataSource = new DataSource({
    store: new ODataStore({
      version: 4,
      key: 'Id',
      url: `${environment.apiUrl}/${datatableValues.componentUrl}`,
      beforeSend: (e) => {
        e.headers = {
          'Access-Control-Allow-Origin':'*',
        };
      },
    }),
    select: datatableValues.selectFields,
    expand: datatableValues.expandValues,
    filter: datatableValues.filterValue,
    sort: datatableValues.sortValues,
  });

  return datatableValues;
}
export function searchQueryBuilder(dxColumns : DxColumn[], searchStr : string) {
  var result = [];
  searchStr = "науки";
  dxColumns.forEach(function (value) {
    // var result1 = [];
    if(value.fieldName != 'Id') {
      // result1 = [];
      // result1.push(value.fieldName);
      // result1.push('Contains');
      // result1.push(searchStr);
      result.push(value.fieldName);
    }
  })
  return result;
}


