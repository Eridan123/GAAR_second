import {DxColumn, Monopoly} from '../base';

const NativeMonopolyColumns: DxColumn[] = [
  { fieldName: 'Id', caption: '#', visible: false },
  { fieldName: 'Organization', caption: 'Наименование хозяйствующего субъекта/группы лиц' },
  { fieldName: 'INN', caption: 'ИНН' },
  { fieldName: 'Product', caption: 'Наименование товара (работы, услуги), по которым регулируется хозяйствующий субъект/группа лиц' },
  { fieldName: 'RegulationType', caption: 'Вид/метод регулирования' },
  { fieldName: 'Region', caption: 'Регион, обслуживаемый хозяйствующим субъектом/группой лиц' },
  { fieldName: 'IncludeOrder', caption: 'Приказ о включении в реестр' },
  { fieldName: 'ExcludeOrder', caption: 'Приказ об исключении в реестр' },
  { fieldName: 'CorrectOrder', caption: 'Приказ о внесении изменений в Реестр' },
  { fieldName: 'Price', caption: 'Цена(Тариф) товара' },
  { fieldName: 'OrderDocument', caption: 'Приказ об установлении цен(тарифов) на товар' }
];
export class NativeMonopoly extends Monopoly {
  regulationType: number;
}
export { NativeMonopolyColumns };
