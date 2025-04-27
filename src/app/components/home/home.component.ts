import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainComponent }            from '../main/main.component';
import { CoffeeListComponent }      from '../coffee-list/coffee-list.component';
import { DessertListComponent }     from '../dessert-list/dessert-list.component';
import { FooterComponent }          from '../footer/footer.component';
import { SearchResultComponent }    from '../search-result/search-result.component';
import { SearchService }            from '../../services/search.service';

@Component({
  selector   : 'app-home',
  standalone : true,
  templateUrl: './home.component.html',
  styleUrls  : ['./home.component.scss'],
  imports    : [
    CommonModule,
    MainComponent,
    CoffeeListComponent,
    DessertListComponent,
    FooterComponent,
    SearchResultComponent         
  ]
})
export class HomeComponent {
  constructor(public search: SearchService) {}
}
