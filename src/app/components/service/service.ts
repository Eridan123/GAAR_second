import {DatatableValuesModel, DxColumn, Reference} from "../base";

const ServiceColumns: DxColumn[] = [
  { fieldName: 'Name', caption: 'Название' },
  { fieldName: 'Section', caption: 'Пункт' },
  { fieldName: 'AuthorizedOrganization.Name',
    caption: 'Уполномоченный государственный орган, ответственный за стандартизацию государственной услуги' },
  { fieldName: 'ServiceTermString', caption: 'Условие предоставления услуги' },
  // , customizetext: 'customText' },
  { fieldName: 'Comment', caption: 'Примечание' },
];

export class Service extends Reference {
    section: string;
    authorizedOrganization: number;
    serviceTerm = 0;
    comment: string;
}

var serviceDatatableValues = new DatatableValuesModel(
  [],
  'ЕДИНЫЙ РЕЕСТР (ПЕРЕЧЕНЬ)',
  'государственных услуг, оказываемых государственными органами, их структурными подразделениями и подведомственными учреждениями',
  'odata/SimpleService',
  ServiceColumns,
  [ 'Id', 'Name', 'IsFolder', 'Parent', 'Section', 'ServiceTerm', 'ServiceTermString', 'Comment', 'AuthorizedOrganization' ],
  null,
  [[ 'MarkAsDeleted', '=', false ]],
  [ 'AuthorizedOrganization' ]
);

export { ServiceColumns, serviceDatatableValues};
