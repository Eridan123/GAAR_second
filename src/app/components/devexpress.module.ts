import { NgModule } from '@angular/core';

import {
  DxDataGridModule,
  DxSelectBoxModule,
  DxCheckBoxModule,
  DxTemplateModule,
  DxBulletModule,
  DxButtonModule,
  DxTreeListModule,
  DxResizableModule,
  DxBoxModule,
  DxTextBoxModule,
  DxDateBoxModule,
  DxDropDownBoxModule,
  DxTextAreaModule,
  DxTagBoxModule,
  DxValidatorModule,
  DxTreeViewModule,
  DxNumberBoxModule,
  DxListModule, DxActionSheetModule
} from 'devextreme-angular';
import { DominantMonopolyComponent } from './dominant-monopoly/dominant-monopoly.component';
import { GovernmentServiceComponent } from './government-service/government-service.component';
import { ImportedProductComponent } from './imported-product/imported-product.component';
import { PermissionDocumentComponent } from './permission-document/permission-document.component';
import { ServiceComponent } from './service/services.component';

@NgModule({
    imports: [
        DxDataGridModule,
        DxSelectBoxModule,
        DxCheckBoxModule,
        DxTemplateModule,
        DxBulletModule,
        DxButtonModule,
        DxTreeListModule,
        DxResizableModule,
        DxBoxModule,
        DxTextBoxModule,
        DxDateBoxModule,
        DxDropDownBoxModule,
        DxTextAreaModule,
        DxTagBoxModule,
        DxValidatorModule,
        DxTreeViewModule,
        DxNumberBoxModule,
        DxListModule,
        DxActionSheetModule
    ],
    exports: [
        DxDataGridModule,
        DxSelectBoxModule,
        DxCheckBoxModule,
        DxTemplateModule,
        DxBulletModule,
        DxButtonModule,
        DxTreeListModule,
        DxResizableModule,
        DxBoxModule,
        DxTextBoxModule,
        DxDateBoxModule,
        DxDropDownBoxModule,
        DxTextAreaModule,
        DxTagBoxModule,
        DxValidatorModule,
        DxTreeViewModule,
        DxNumberBoxModule,
        DxListModule,
        DxActionSheetModule
    ],
    declarations: [DominantMonopolyComponent, GovernmentServiceComponent, ImportedProductComponent, PermissionDocumentComponent, ServiceComponent]
  })
  export class DevexpressModule {}
