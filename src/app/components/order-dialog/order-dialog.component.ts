import { Component, EventEmitter, Output, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-order-dialog',
  standalone: true,
  templateUrl: './order-dialog.component.html',
  styleUrls: ['./order-dialog.component.scss'],
  imports: [CommonModule]
})
export class OrderDialogComponent {

  @Input({ required: true }) productNames: string[] = [];

  @Output() close = new EventEmitter<void>();
  @Output() buy   = new EventEmitter<void>();
}
