import { SejmService } from '../../services/sejm.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sejm',
  templateUrl: './sejm.component.html',
  styleUrls: ['./sejm.component.css']
})
export class SejmComponent implements OnInit {

  constructor(private sejmService: SejmService) { }

  morons: Array<any>;

  ngOnInit() {
    this.sejmService.getMorons().subscribe(
      (poslowie: Array<any>) => {
        console.log(poslowie);
        this.morons = poslowie;
        // this.morons = poslowie.map( item => {
        //   return item.data["ludzie.nazwa"];
        // })

      },
      error => {
        console.log('Posłowie - ERROR!!');
      },
      () => {
        console.log('Posłowie - complete!!');
      }
    );
  }

}
