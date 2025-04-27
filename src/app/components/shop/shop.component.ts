import { Component, Renderer2, OnDestroy } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { ShopService }  from '../../services/shop.service';
import { Product }      from '../../models/product.model';
import { OrderDialogComponent } from '../order-dialog/order-dialog.component';

@Component({
  selector   : 'app-shop',
  standalone : true,
  templateUrl: './shop.component.html',
  styleUrls  : ['./shop.component.scss'],
  imports    : [CommonModule, CurrencyPipe, OrderDialogComponent]
})
export class ShopComponent implements OnDestroy {

  showDialog = false;

  constructor(
    public  shop: ShopService,
    private rdr : Renderer2
  ) {}

  openDialog(){
    this.showDialog = true;
    this.rdr.addClass(document.body,'dialog-open');
  }
  closeDialog(){
    this.showDialog = false;
    this.rdr.removeClass(document.body,'dialog-open');
  }
  buy(){
    this.shop.clear();         
    this.closeDialog();
  }

  ngOnDestroy(){
    this.rdr.removeClass(document.body,'dialog-open');
  }

  toggle(p:Product){ this.shop.toggle(p); }
  trackBy = (_:number,p:Product)=>p.name;
  get selectedNames(){ return this.shop.selectedSignal().map(p=>p.name); }
}
