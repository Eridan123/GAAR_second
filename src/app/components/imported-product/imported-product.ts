import {Base, DxColumn} from '../base';

const ImportedProductColumns: DxColumn[] = [
  { fieldName: 'Id', caption: '#', visible: false },
  { fieldName: 'Product.Name', caption: 'Наименование товара, на который установлен МУКЦ' },
  { fieldName: 'Product.Unit.Name', caption: 'Ед.изм' },
  { fieldName: 'Code', caption: 'Код ТН ВЭД ЕАЭС' },
  { fieldName: 'Price', caption: 'Уровен МУКЦ' },
  { fieldName: 'OrderDocument.Name', caption: 'Реквизиты приказа ГААР об установлении/изменении МУКЦ' }
];
export { ImportedProductColumns };
export class ImportedProduct extends Base {
  documentDate: Date = new Date();
  imported: boolean;
  product: number;
  unit: number;
  code: string;
  price: any;
  orderDocument: number;
}
