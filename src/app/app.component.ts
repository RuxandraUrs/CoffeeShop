import { Component }     from '@angular/core';
import { RouterOutlet }  from '@angular/router';

import { HeaderComponent }       from './components/header/header.component';
import { SearchResultComponent } from './components/search-result/search-result.component';
import { SearchService }         from './services/search.service';

@Component({
  selector   : 'app-root',
  standalone : true,
  imports    : [HeaderComponent, SearchResultComponent, RouterOutlet],
  template   : `
    <app-header></app-header>

    <app-search-result *ngIf="search.resultSignal() as p"
                       [product]="p"></app-search-result>

    <router-outlet></router-outlet>
  `
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  constructor(public search: SearchService) {}
}
