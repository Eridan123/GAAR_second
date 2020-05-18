import {Base, DxColumn} from '../base';

const PermissionDocumentColumns: DxColumn[] = [
  { fieldName: 'Id', caption: '#', visible: false },
  { width: '300', fieldName: 'Organization.Name',
    caption: 'Наименование органа исполнительной власти/органа МСУ, выдающего разрешительный документ' },
  { width: '300', fieldName: 'Product.Name', caption: 'Наименование разрешительного документа' },
  { width: '300', fieldName: 'Price', caption: 'Стоимость разрешительного документа, согласованная антимонопольным органом' },
  { fieldName: 'OrderDocument.Name', caption: 'Реквизиты приказа ГААР о согласовании/изменении/отмене стоимости разрешительного документа' }
];
export { PermissionDocumentColumns };
export class PermissionDocument extends Base {
  documentDate: Date = new Date();
  organization: number;
  product: number;
  price: number;
  orderDocument: number;
}
