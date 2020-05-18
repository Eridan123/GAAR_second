import {DocumentBase, DxColumn} from '../base';

const GovernmentServiceColumns: DxColumn[] = [
  { fieldName: 'Id', caption: '#', visible: false },
  { fieldName: 'Organization',
    caption: 'Наименование органа исполнительной власти/органа МСУ, оказывающего государственную/муниципальную платную услугу' },
  { fieldName: 'Product', caption: 'Наименование государственной/муниципальной платной услуги' },
  { fieldName: 'Price', caption: 'Стоимость государственной/муниципальной платной услуги, согласованная антимонопольным органом' },
  { fieldName: 'PriceChangeOrderDocument',
    caption: 'Реквизиты приказа ГААР о согласовании/изменении/отмене стоимости государственной/муниципальной платной услуги' },
  { fieldName: 'PriceChangeApproveOrderDocument',
    caption: 'Реквизиты приказа уполномоченного органа об утверждении стоимости государственной/муниципальной платной услуги' }
];
export class GovernmentService extends DocumentBase {
  service: number;
  organization: number;
  product: number;
  isStateService: boolean;
}
export { GovernmentServiceColumns };
