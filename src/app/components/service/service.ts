import {DxColumn, Reference} from "../base";

const ServiceColumns: DxColumn[] = [
  { fieldName: 'Name', caption: 'Название' },
  { fieldName: 'Section', caption: 'Пункт' },
  { fieldName: 'AuthorizedOrganization.Name',
    caption: 'Уполномоченный государственный орган, ответственный за стандартизацию государственной услуги' },
  { fieldName: 'ServiceTermString', caption: 'Условие предоставления услуги' },
  // , customizetext: 'customText' },
  { fieldName: 'Comment', caption: 'Примечание' },
];
export { ServiceColumns };
export class Service extends Reference {
    section: string;
    authorizedOrganization: number;
    serviceTerm = 0;
    comment: string;
}
