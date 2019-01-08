import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public arr = [{ name: 'poetries', age: 22 }, { name: 'jing' , age: 31}];
  public imgSrc = 'https://upload-images.jianshu.io/upload_images/1480597-7d07da8dccab3159.png';
  public orderStatus = 2;
  public flag = true;
  public today = new Date();
  constructor() { }

  ngOnInit() {
  }
  clickEvent() {
    alert(1);
  }
  keyDown(e) {
    console.log(e);
  }

}
