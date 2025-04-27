import { Component, ViewChild, ElementRef } from '@angular/core';
import { CoffeeService } from '../../services/coffee.service';
import { Product }       from '../../models/product.model';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-coffee-list',
  standalone:true,
  templateUrl: './coffee-list.component.html',
  styleUrls: ['./coffee-list.component.scss'],
  imports: [CommonModule, RouterModule]
})
export class CoffeeListComponent {

  constructor(public coffeeSrv: CoffeeService) {}

  get coffees(): Product[] { return this.coffeeSrv.coffees; }

  order(p: Product) { this.coffeeSrv.select(p); }

  @ViewChild('track',{read:ElementRef}) track!: ElementRef<HTMLElement>;
  scrollLeft()  { this.track.nativeElement.scrollBy({ left:-320, behavior:'smooth' }); }
  scrollRight() { this.track.nativeElement.scrollBy({ left: 320, behavior:'smooth' }); }
}
