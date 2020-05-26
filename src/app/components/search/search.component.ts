import {Component, Input, OnInit} from '@angular/core';
import {Service, ServiceColumns, serviceDatatableValues} from "../service/service";
import {datatableBuilderFunction, DatatableValuesModel, DxColumn, searchQueryBuilder} from "../base";
import DataSource from "devextreme/data/data_source";
import {environment} from "../../../environments/environment";
import ODataStore from "devextreme/data/odata/store";
import {Organization} from "../organization/organization";
import {any} from "codelyzer/util/function";
import { HttpClient } from '@angular/common/http';
import notify from 'devextreme/ui/notify';
import {Subscription} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {DominateMonopolyComponent} from "../dominant-monopoly/dominant-monopoly.component";
import {NativeMonopolyColumns, nativeMonopolyDatatableValues} from "../native-monopoly/native-monopoly";
import {DominantMonopolyColumns, dominantMonopolyDatatableValues} from "../dominant-monopoly/dominant-monopoly";
import {PermissionDocumentColumns, permissionDocumentDatatableValues} from "../permission-document/permission-document";
import {ImportedProductColumns, importedProductDatatableValues} from "../imported-product/imported-product";
import {GovernmentServiceColumns, governmentServiceDatatableValues} from "../government-service/government-service";

@Component({
  selector: 'app-about',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css','../home/home.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private http: HttpClient,private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(params =>
      this.searchValue = params.searchValue
    );
  }

  private subscription: Subscription;
  searchValue:string;
  datatableValues:DatatableValuesModel[]=[];

  ngOnInit(): void {
    // this.subscription = this.activatedRoute.params.subscribe(params => {
    //   this.searchValue = params.searchValue;
    //
    // });
    this.search();
  }
  setSearchValue(event : any){
    this.searchValue = event.target.value;
  }
  search(){
    this.datatableValues = [];
    var datatableModel1 = nativeMonopolyDatatableValues;
    var fieldNames = searchQueryBuilder(NativeMonopolyColumns,this.searchValue);
    datatableModel1.filterValue = [[ 'MarkAsDeleted', '=', false ], 'and',
      [ [fieldNames[0].toString,'Contains',this.searchValue], 'or',
        [fieldNames[1],'Contains',this.searchValue], 'or',
        [fieldNames[2],'Contains',this.searchValue], 'or',
        [fieldNames[3],'Contains',this.searchValue], 'or',
        [fieldNames[4],'Contains',this.searchValue], 'or',
        [fieldNames[5],'Contains',this.searchValue], 'or',
        [fieldNames[6],'Contains',this.searchValue], 'or',
        [fieldNames[7],'Contains',this.searchValue], 'or',
        [fieldNames[8],'Contains',this.searchValue], 'or',
        [fieldNames[9],'Contains',this.searchValue]]
    ];
    datatableModel1 = datatableBuilderFunction(datatableModel1);
    this.datatableValues.push(datatableModel1);

    var datatableModel2 = dominantMonopolyDatatableValues;
    fieldNames = searchQueryBuilder(DominantMonopolyColumns,this.searchValue);
    datatableModel2.filterValue = [[ 'MarkAsDeleted', '=', false ], 'and',
      [ [fieldNames[0].toString,'Contains',this.searchValue], 'or',
        [fieldNames[1],'Contains',this.searchValue], 'or',
        [fieldNames[2],'Contains',this.searchValue], 'or',
        [fieldNames[3],'Contains',this.searchValue], 'or',
        [fieldNames[4],'Contains',this.searchValue], 'or',
        [fieldNames[5],'Contains',this.searchValue], 'or',
        [fieldNames[6],'Contains',this.searchValue]]
    ];
    datatableModel2 = datatableBuilderFunction(datatableModel1);
    this.datatableValues.push(datatableModel2);

    var datatableModel3 = serviceDatatableValues;
    datatableModel3.filterValue = [[ 'MarkAsDeleted', '=', false ], 'and',
      [ ['Name','Contains',this.searchValue], 'or',
        ['Section','Contains',this.searchValue], 'or',
        ['AuthorizedOrganization.Name','Contains',this.searchValue], 'or',
        ['Comment','Contains',this.searchValue]]
    ];
    datatableModel3 = datatableBuilderFunction(datatableModel3);
    this.datatableValues.push(datatableModel3);

    var datatableModel4 = permissionDocumentDatatableValues;
    fieldNames = searchQueryBuilder(PermissionDocumentColumns,this.searchValue);
    datatableModel4.filterValue = [[ 'MarkAsDeleted', '=', false ], 'and',
      [ [fieldNames[0],'Contains',this.searchValue], 'or',
        // [fieldNames[1],'Contains',this.searchValue], 'or',
        // [fieldNames[2],'Contains',this.searchValue], 'or',
        [fieldNames[1],'Contains',this.searchValue]]
    ];
    datatableModel4 = datatableBuilderFunction(datatableModel4);
    datatableModel4.subtitle ="Cтоимости разрешительных документов";
    this.datatableValues.push(datatableModel4);

    var datatableModel5 = importedProductDatatableValues;
    // fieldNames = searchQueryBuilder(ImportedProductColumns,this.searchValue);
    datatableModel5.filterValue = [[ 'MarkAsDeleted', '=', false ], 'and',
      [ ['Product.Name','Contains',this.searchValue], 'or',
        ['OrderDocument.OrderNumber','Contains',this.searchValue], 'or',
        ['Code','Contains',this.searchValue]]
    ];
    datatableModel5 = datatableBuilderFunction(datatableModel5);
    datatableModel5.subtitle = 'Минимальный уровень контрольных цен / Цены на социальные значимые товары ';
    this.datatableValues.push(datatableModel5);

    var datatableModel6 = governmentServiceDatatableValues;
    fieldNames = searchQueryBuilder(GovernmentServiceColumns,this.searchValue);
    datatableModel6.filterValue = [[ 'MarkAsDeleted', '=', false ], 'and',
      [ [fieldNames[0],'Contains',this.searchValue], 'or',
        // [fieldNames[1],'Contains',this.searchValue], 'or',
        // [fieldNames[2],'Contains',this.searchValue], 'or',
        // [fieldNames[3],'Contains',this.searchValue], 'or',
        [fieldNames[1],'Contains',this.searchValue]]
    ];
    datatableModel6 = datatableBuilderFunction(datatableModel6);
    datatableModel6.subtitle = 'Государственные платные услуги / Муниципальные платные услуги';
    this.datatableValues.push(datatableModel6);
  }
}
