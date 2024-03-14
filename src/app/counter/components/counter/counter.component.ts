import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `<h3>Counter: {{ counter }}</h3>
    <button (click)="increaseBy(1)">+1</button>
    <button (click)="resetCounter()">Reset</button>
    <button (click)="decrementBy()">-1</button> `,
})
export class CounterComponent {
  public counter: number = 10;
  increaseBy(value: number): void {
    this.counter += value;
  }

  decrementBy(): void {
    this.counter -= 1;
  }

  resetCounter(): void {
    this.counter = 10;
  }
}
