import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-fetch',
  templateUrl: './fetch.component.html',
  styleUrls: ['./fetch.component.scss']
})
export class FetchComponent implements OnInit {

  public list:any[] = [];
  
  constructor(public http: HttpClient) { }

  ngOnInit() {
  }
  getData() {
    let api:string = 'http://a.itying.com/api/productlist';

  //  this.http.get(api).subscribe((res: any) => {
  //    console.log(res.result);
  //    this.list = res.result;
  //  })

   // jsonp请求方式 跨域请求
   this.http.jsonp(api,'callback').subscribe((res:any) => {
    // console.log(response)
    this.list = res.result;
  })
  }
  // post方式
  doLogin() {
    // 需要启动本地服务 server 在项目目录 server/app.js
      const httpOptions = {
          headers: new HttpHeaders({
              'Content-Type': 'application/json'
          })
      };
      var api = "http://127.0.0.1:3000/doLogin";
      this.http.post(api, {
          username: '张三',
          age: '20'
      }, httpOptions).subscribe(response => {
          console.log(response, 'post data===');
      });
  }

}
