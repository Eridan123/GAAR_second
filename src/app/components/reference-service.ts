import { Organization } from './organization/organization';
import { HttpClient } from '@angular/common/http';
import {Service} from "./service/service";
import {GovernmentService} from "./government-service/government-service";
import {NativeMonopoly} from "./native-monopoly/native-monopoly";
import {DominantMonopoly} from "./dominant-monopoly/dominant-monopoly";
import {PermissionDocument} from "./permission-document/permission-document";
import {ImportedProduct} from "./imported-product/imported-product";
import {environment} from "../../environments/environment.prod";

export class ReferenceService
{
    // Reference
    organizations: Organization[];
    services: Service[];

    // Document
    governmentservices: GovernmentService[];
    nativemonopolys: NativeMonopoly[];
    dominantmonopolys: DominantMonopoly[];
    permissiondocuments: PermissionDocument[];

    // BaseEntity
    importedproduct: ImportedProduct[];

    constructor(private http:HttpClient) { }

    getReferences(): void {

        this.http.get<any>(`${environment.apiUrl}/organization/keyvalue`).subscribe(resp =>
          {
            this.organizations = resp;
          });
        this.http.get<any>(`${environment.apiUrl}/unit/keyvalue`).subscribe(resp =>
          {
            this.organizations = resp;
          });
    }
}
