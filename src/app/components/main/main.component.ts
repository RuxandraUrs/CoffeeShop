import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-main',
  standalone:true,
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
  imports: [CommonModule, RouterModule]
})
export class MainComponent {

}
