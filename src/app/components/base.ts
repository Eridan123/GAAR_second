import {Validators} from '@angular/forms';
import {environment} from "../../environments/environment.prod";

export function renderOrder(order: any) {
  return '№' + order.orderNumber + ',  от ' + new Date(order.documentDate).toLocaleDateString() + ' - "' + order.comments + '"';
}
export interface MenuNode {
  id: number;
  name: string;
  children?: MenuNode[];
}
export interface FlatNode {
  id: number;
  expandable: boolean;
  name: string;
  level: number;
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
