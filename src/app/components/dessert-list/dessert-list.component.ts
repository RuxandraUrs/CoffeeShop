import { Component, ViewChild, ElementRef } from '@angular/core';
import { DessertService } from '../../services/dessert.service';
import { Product }        from '../../models/product.model';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-dessert-list',
  standalone:true,
  templateUrl: './dessert-list.component.html',
  styleUrls: ['./dessert-list.component.scss'],
  imports: [CommonModule, RouterModule]
  
})
export class DessertListComponent {

  constructor(public dessertSrv: DessertService) {}

  get desserts(): Product[] { return this.dessertSrv.desserts; }

  order(d: Product) { this.dessertSrv.select(d); }

  @ViewChild('track',{read:ElementRef}) track!: ElementRef<HTMLElement>;
  scrollLeft()  { this.track.nativeElement.scrollBy({ left:-320, behavior:'smooth' }); }
  scrollRight() { this.track.nativeElement.scrollBy({ left: 320, behavior:'smooth' }); }
}
