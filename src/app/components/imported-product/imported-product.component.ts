import {Component, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {DxColumn} from '../base';
import DataSource from 'devextreme/data/data_source';
import ODataStore from 'devextreme/data/odata/store';
import {ActivatedRoute} from '@angular/router';

import notify from 'devextreme/ui/notify';
import {ImportedProduct, ImportedProductColumns} from "./imported-product";
import {environment} from "../../../environments/environment.prod";

@Component({
  selector: 'app-imported-product',
  templateUrl: '../document-list.html',
  styleUrls: ['../document-list.css']
})
export class ImportedProductComponent {

  private subscription: Subscription;

  titles = ['Минимальный уровень контрольных цен', 'Цены на социальные значимые товары '];
  title: string;
  subtitle = '';
  componentUrl = 'ImportedProduct';
  newButton: string;
  buttons: any;
  componentItem: ImportedProduct = new ImportedProduct();
  rows: DxColumn[] = ImportedProductColumns;
  dxDataSource: DataSource;

  constructor(
    private http: HttpClient,
    private activateRoute: ActivatedRoute) {

    this.subscription = activateRoute.params.subscribe(params => {

      const imported = params.mtype === 'imported';
      this.title = imported ? this.titles[0] : this.titles[1];
      this.componentItem.imported = imported;
      this.dxDataSource = new DataSource({
        store: new ODataStore({
          version: 4,
          key: 'Id',
          url: `${environment.apiUrl}/odata/${this.componentUrl}`,
          onLoaded: () => {  }
        }),
        select: [ 'Id', 'DocumentDate', 'Product', 'Code', 'Price', 'OrderDocument' ],
        expand: [ 'OrderDocument', 'Product.Unit' ],
        filter: [ [ 'Imported', '=', imported ], 'and', [ 'MarkAsDeleted', '=', false ] ],
        sort: [ { selector: 'Id', desc: true } ]
      });
    });
  }
}
