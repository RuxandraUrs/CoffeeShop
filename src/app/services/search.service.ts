import { Injectable, signal } from '@angular/core';
import { ShopService }  from './shop.service';
import { Product }      from '../models/product.model';

const norm = (s:string)=>s.trim().toLowerCase()
                          .normalize('NFD').replace(/[\u0300-\u036f]/g,'');

@Injectable({providedIn:'root'})
export class SearchService {

  constructor(private shop: ShopService){}

  readonly resultSignal = signal<Product|null>(null);

  search(term:string):boolean{
    const key = norm(term);
    if (!key){ this.resultSignal.set(null); return false; }

    const prod = this.shop.productsSignal()
                  .find(p=> norm(p.name).includes(key));

    this.resultSignal.set(prod ?? null);
    return !!prod;
  }
}
