import { CounterService } from './services/counter.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-gonia';
  inne = 'to jest cos';

  constructor (
    public counterService: CounterService
  ) {
  }

  incCounter() {
    this.counterService.incValue();
  }

  show(form) {
    console.log(form);
  }
}