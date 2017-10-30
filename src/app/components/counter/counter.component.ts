import { CounterService } from '../../services/counter.service';

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

// export interface event



@Component({
  selector: 'app-counter', 
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  $maxReached: any;

  @Input('title')  title: string = '';

  @Input('cVal')  counterValue: number = 0;
  @Input('cMax')  counterMaxValue: number = 10;
  // @Output('cMax') maxReached= new EventEmitter();
  @Output() maxReached : EventEmitter<any> = new EventEmitter();

    //  @Output() maxReached1: new EventEmitter<any> = new EventEmitter()

  birthday = new Date(1988, 3, 15); // April 15, 1988

  newPerson: string = 'abc';

  persons: Array<string> = [
    'Gosia', 'Krystian', 'Łukasz', 'Gwizdek', 'Zdziś', 'Wieś'
  ]
  selectedPerson: string;

  constructor(public counterService: CounterService) {

  }

  ngOnInit() {
    this.counterValue
  }

  counterInc() {
    if (this.counterValue<this.counterMaxValue) {
      this.counterValue++;
    } 
    else {
      this.$maxReached.emit(true);
    }
  }

  counterDec() {
    this.counterValue--;
  }

  zeroCHeck() {
    return this.counterValue<0 ? true : false;
  }

  addPerson(person: any) {
    console.log(person);
    this.persons.push(this.newPerson);
  }

  clearSelected() {
    this.selectedPerson = null;
  }
}
