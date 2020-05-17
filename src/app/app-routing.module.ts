import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ContactComponent} from "./components/contact/contact.component";
import {ResourcesComponent} from "./components/resources/resources.component";
import {DocumentComponent} from "./components/document/document.component";
import {AboutComponent} from "./components/about/about.component";
import {HomeComponent} from "./components/home/home.component";
import { SearchComponent } from './components/search/search.component';


const routes: Routes = [
{
    path: '',
    component: HomeComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },{
    path: 'document',
    component: DocumentComponent,
  },{
    path: 'resource',
    component: ResourcesComponent,
  },{
    path: 'contact',
    component: ContactComponent,
  },{
    path: 'search',
    component: SearchComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
