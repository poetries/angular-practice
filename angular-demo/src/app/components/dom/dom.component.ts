import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-dom',
  templateUrl: './dom.component.html',
  styleUrls: ['./dom.component.scss']
})
export class DomComponent implements OnInit {

  constructor() { }

  @ViewChild('myBox') mybox: any;

  ngOnInit() {
  }
  ngAfterViewInit() {
    // Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    // Add 'implements AfterViewInit' to the class.
    // 原生js获取DOM节点
    let box: any = document.getElementById('box');

    console.log(box.innerHTML);

    // 通过viewchild来获取DOM节点
    console.log(this.mybox.nativeElement.innerHTML)
  }
  run() {
    console.log('我是dom子组件')
  }

}
