import { Injectable } from '@angular/core';

@Injectable()
export class CounterService {

  value: number = 2; 

  constructor() { }

  getValue(): number {
    return this.value;
  }

  incValue() {
    this.value++;
  }
}
