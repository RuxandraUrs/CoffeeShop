import { Component, Input } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { Product } from '../../models/product.model';

@Component({
  selector   : 'app-search-result',
  standalone : true,
  imports    : [CommonModule, CurrencyPipe],
  templateUrl: './search-result.component.html',
  styleUrls  : ['./search-result.component.scss']
})
export class SearchResultComponent{
  @Input({required:true}) product!: Product;
}
