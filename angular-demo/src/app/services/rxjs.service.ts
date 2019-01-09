import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RxjsService {

  constructor() { }
  getRxjsData() {
    return new Observable((observer) => {
        setTimeout(() => {
          observer.next('observable timeout');
        }, 2000);
    });
  }
  // 多次订阅数据
  getRxjsDataInterval() {
    let count = 0;
    return new Observable((observer) => {
        setInterval(() => {
          count++;
          observer.next(count);
        }, 2000);
    });
  }
}
