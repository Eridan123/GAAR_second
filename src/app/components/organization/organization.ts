import {DxColumn, Reference} from "../base";

const opts = [{ Id: 1, Name: 'Государственный' }, { Id: 2, Name: 'Частный'}];
const OrganizationCollumns: DxColumn[] = [
    { fieldName: 'Name', caption: 'Название' },
    { fieldName: 'INN', caption: 'ИНН' },
    { fieldName: 'Adres', caption: 'Адрес' },
];
export { OrganizationCollumns };
export class Organization extends Reference {
  inn: string;
  adres: string;
  organizationType = 0;
}
