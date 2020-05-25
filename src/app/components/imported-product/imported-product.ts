import {Base, DatatableValuesModel, DxColumn} from '../base';

const ImportedProductColumns: DxColumn[] = [
  { fieldName: 'Id', caption: '#', visible: false },
  { fieldName: 'Product.Name', caption: 'Наименование товара, на который установлен МУКЦ' },
  { fieldName: 'Product.Unit.Name', caption: 'Ед.изм' },
  { fieldName: 'Code', caption: 'Код ТН ВЭД ЕАЭС' },
  { fieldName: 'Price', caption: 'Уровен МУКЦ' },
  { fieldName: 'OrderDocument.Name', caption: 'Реквизиты приказа ГААР об установлении/изменении МУКЦ' }
];
export class ImportedProduct extends Base {
  documentDate: Date = new Date();
  imported: boolean;
  product: number;
  unit: number;
  code: string;
  price: any;
  orderDocument: number;
}
var importedProductDatatableValues = new DatatableValuesModel(
  ['Минимальный уровень контрольных цен', 'Цены на социальные значимые товары '],
  null,
  null,
  'odata/SimpleImportedProduct',
  ImportedProductColumns,
  [ 'Id', 'DocumentDate', 'Product', 'Code', 'Price', 'OrderDocument' ],
  [ { selector: 'Id', desc: true } ],
  null,
  [ 'OrderDocument', 'Product.Unit' ]
);

export { ImportedProductColumns, importedProductDatatableValues};
