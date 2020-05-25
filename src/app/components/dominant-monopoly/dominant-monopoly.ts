import {DatatableValuesModel, DxColumn, Monopoly} from '../base';

const DominantMonopolyColumns: DxColumn[] = [
  { fieldName: 'Id', caption: '#', visible: false },
  { fieldName: 'Organization.Name', caption: 'Наименование хозяйствующего субъекта/группы лиц' },
  { fieldName: 'Organization.INN', caption: 'ИНН' },
  { fieldName: 'Product.Name',
    caption: 'Наименование товара (работы, услуги), по которым регулируется хозяйствующий субъект/группа лиц' },
  { fieldName: 'Region.Name', caption: 'Регион, обслуживаемый хозяйствующим субъектом/группой лиц' },
  { fieldName: 'IncludeOrder.Name', caption: 'Приказ о включении в реестр' },
  { fieldName: 'ExcludeOrder.Name', caption: 'Приказ об исключении в реестр' },
  { fieldName: 'CorrectOrder.Name', caption: 'Приказ о внесении изменений в Реестр' }
];
export class DominantMonopoly extends Monopoly {
  actionOrderDocuments: any;
}

var dominantMonopolyDatatableValues = new DatatableValuesModel(
  ['Республиканский реестр', 'Региональный реестр'],
  null,
  'субъектов занимающих доминирующее положение на товарных рынках Кыргызской Республики',
  'odata/SimpleDominantMonopoly',
  DominantMonopolyColumns,
  null,
  [ { selector: 'Id', desc: true } ],
  [ [ 'MarkAsDeleted', '=', false ] ],
  [ 'Organization', 'Product', 'Region', 'IncludeOrder', 'ExcludeOrder', 'CorrectOrder' ]
);

export { DominantMonopolyColumns, dominantMonopolyDatatableValues};
