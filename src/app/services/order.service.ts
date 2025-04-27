import { Injectable, signal, computed } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class OrderService {

  private readonly listSignal = signal<string[]>([]);

  readonly labelSignal = computed(() =>
    this.listSignal().join(', ')
  );

  add(name: string) {
    const arr = this.listSignal();
    if (!arr.includes(name)) {
      this.listSignal.set([...arr, name]);
    }
  }

  clear() { this.listSignal.set([]); }
}
