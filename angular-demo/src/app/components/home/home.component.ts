import { Component, OnInit, ViewChild } from '@angular/core';

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
  public msg = '来自home父组件的消息';
  public title = 'home组件标题'

  constructor() { }

  @ViewChild('dom') dom: any;
  @ViewChild('child') child: any; // 获取字符串实例

  ngOnInit() {
  }
  ngAfterViewInit() {
    // 调用子组件dom中的方法
    // console.log(this.dom.run())
  }
  getDom() {
    console.log(this.dom.run())
  }
  clickEvent() {
    alert(1);
  }
  keyDown(e) {
    console.log(e);
  }
  run() {
    alert('子组件执行父组件方法');
  }
  getchild() {
    this.child.getChildMethod()
  }
  getchildMsg() {
    this.child.getChildMsg()
  }
  runParent(e) {
    console.log(e,'===') // e就是子组件给父组件广播的数据
    this.child.sendParentMsg()
  }
}
