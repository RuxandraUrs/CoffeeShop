import { Component, Inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { DOCUMENT, CommonModule } from '@angular/common';
import { AuthService }   from '../../services/auth.service';
import { OrderService }  from '../../services/order.service';
import { SearchService } from '../../services/search.service';

@Component({
  selector   : 'app-header',
  standalone : true,
  imports    : [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrls  : ['./header.component.scss']
})
export class HeaderComponent {

  constructor(
    private router : Router,
    public  auth   : AuthService,
    public  order  : OrderService,
    public  search : SearchService,
    @Inject(DOCUMENT) private doc: Document
  ) {}

  goto(fragment:string){
    this.router.navigate(['/'],{fragment}).then(()=>{
      this.doc.getElementById(fragment)
          ?.scrollIntoView({behavior:'smooth',block:'start'});
    });
  }

  onSearch(term: string, inputEl: HTMLInputElement){
    const ok = this.search.search(term);
    if (!ok){
      inputEl.value = '';
      inputEl.placeholder = 'NO RESULTS';
      inputEl.classList.add('no-result');
      setTimeout(()=>{
        inputEl.placeholder = 'Search…';
        inputEl.classList.remove('no-result');
      }, 2000);
    }
  }
}
