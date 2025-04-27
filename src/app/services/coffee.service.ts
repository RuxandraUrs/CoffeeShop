import { Injectable, signal } from '@angular/core';
import { Product } from '../models/product.model';
import { OrderService } from './order.service';

@Injectable({ providedIn: 'root' })
export class CoffeeService {

  readonly coffees: Product[] = [
    { name:'Lungo Coffee',        desc:'Espresso lengthened with hot water.',                       price: 1.99, img:'/assets/img/lungo.jpg' },
    { name:'Dalgona Coffee',      desc:'Whipped instant coffee, sugar & milk.',                     price: 2.49, img:'/assets/img/dalgona.jpg' },
    { name:'Iced Coffee',         desc:'A refreshing cold-served beverage.',                        price: 1.49, img:'/assets/img/iced.jpg'   },
    { name:'Filter Coffee',       desc:'70 % coffee & 30 % chicory freshly roasted.',               price: 0.99, img:'/assets/img/filter.jpg' },
    { name:'Cappuccino',          desc:'Equal parts espresso, steamed milk & foam.',                price: 1.79, img:'/assets/img/cappuccino.jpg' },
    { name:'Mocha',               desc:'Espresso with chocolate syrup & steamed milk.',             price: 2.19, img:'/assets/img/mocha.jpg' },
    { name:'Flat White',          desc:'Velvety-textured milk over a double ristretto.',            price: 1.89, img:'/assets/img/flatwhite.jpg' },
    { name:'Espresso Macchiato',  desc:'Espresso “stained” with a dollop of milk foam.',            price: 1.39, img:'/assets/img/macchiato.jpg' },
    { name:'Affogato',            desc:'Vanilla gelato “drowned” in hot espresso.',                 price: 2.09, img:'/assets/img/affogato.jpg' }
  ];

  readonly selectedSignal = signal<string | null>(null);
  constructor(private order: OrderService) {}

  select(p: Product) { this.order.add(p.name); }
  }
