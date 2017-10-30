import { CounterService } from '../services/counter.service';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'personFilter'
})
export class PersonFilterPipe implements PipeTransform {

  constructor(private counterService: CounterService) {

  }

  transform(persons: Array<string>, count: number = 3): Array<string> {
    return persons.slice(0, count);
  }

}
