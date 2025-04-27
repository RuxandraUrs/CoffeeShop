import { Injectable, signal, computed } from '@angular/core';
import { CoffeeService }  from './coffee.service';
import { DessertService } from './dessert.service';
import { Product }        from '../models/product.model';

@Injectable({ providedIn:'root' })
export class ShopService {

  constructor(
    private coffee : CoffeeService,
    private dessert: DessertService
  ) {}

  readonly productsSignal = computed<Product[]>(() => [
    ...this.coffee.coffees,
    ...this.dessert.desserts
  ].sort((a,b)=> a.name.localeCompare(b.name)));

  readonly selectedSignal = signal<Product[]>([]);

  toggle(p: Product){
    const arr = this.selectedSignal();
    this.selectedSignal.set(
      arr.includes(p) ? arr.filter(x=>x!==p) : [...arr, p]
    );
  }

  clear(){ this.selectedSignal.set([]); }
}
