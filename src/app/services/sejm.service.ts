import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

export interface IPosel {
  imie: string,
  wiek: number
};

@Injectable()
export class SejmService {

  constructor(private http: Http) { }

  getMorons() : Observable<any> {
    return this.http.get('https://api-v3.mojepanstwo.pl/dane/poslowie.json')
      // .do(data => {
      //   console.log(data);
      // })
      .map(data => {
        let poslowie: Array<any> = data.json().Dataobject;
        return poslowie.slice(0,10);
      });
  }
}