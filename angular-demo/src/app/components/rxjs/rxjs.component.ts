import { Component, OnInit } from '@angular/core';
import { RxjsService } from '../../services/rxjs.service';
import {
  Observable,
  fromEvent
} from 'rxjs';

import {
  map,
  filter,
  throttleTime
} from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.scss']
})
export class RxjsComponent {

  constructor(public request: RxjsService) {

   }

  ngOnInit() {
    // rxjs
    let stream = this.request.getRxjsData();
   let d =  stream.subscribe(data=>{
      console.log(data, '======');
    })

    // 过一秒钟取消订阅
    // setTimeout(() => {
    //   d.unsubscribe();
    // }, 1000);
    
  // pipe对数据进行过滤
  this.request.getRxjsDataInterval().pipe(
      filter(val => val%2 === 0),
      map(val => val * 2)
  ).subscribe(value =>console.log("map>======" + value));

  
  }
}
