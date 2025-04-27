import { Injectable, signal } from '@angular/core';
import { Product } from '../models/product.model';
import { OrderService } from './order.service';

@Injectable({ providedIn: 'root' })
export class DessertService {

  readonly desserts: Product[] = [
    { name:'Tiramisu',      desc:'Espresso-soaked ladyfingers & mascarpone.',      price: 2.49, img:'/assets/img/tiramisu.jpg' },
    { name:'Cheesecake',    desc:'Creamy baked vanilla cheesecake.',               price: 2.29, img:'/assets/img/cheesecake.jpg' },
    { name:'Brownie Sundae',desc:'Fudge brownie, ice-cream & chocolate sauce.',    price: 1.99, img:'/assets/img/brownie.jpg' },
    { name:'Apple Strudel', desc:'Thin pastry rolled with spiced apples.',         price: 1.79, img:'/assets/img/strudel.jpg' },
    { name:'Macarons',      desc:'Assorted almond meringue cookies (6 pcs).',      price: 1.59, img:'/assets/img/macarons.jpg' },
    { name:'Banoffee Pie',  desc:'Banana, cream & toffee on biscuit base.',        price: 2.09, img:'/assets/img/banoffee.jpg' },
    { name:'Chocolate Lava',desc:'Warm cake with molten chocolate centre.',        price: 1.99, img:'/assets/img/lava.jpg' },
    { name:'Cinnamon Roll', desc:'Soft roll with cinnamon sugar & frosting.',      price: 1.29, img:'/assets/img/cinnamon.jpg' },
    { name:'Croissant',     desc:'Buttery flaky pastry, baked fresh daily.',       price: 0.99, img:'/assets/img/croissant.jpg' }
  ];

  constructor(private order: OrderService) {}

  select(p: Product) { this.order.add(p.name); }
  
}
