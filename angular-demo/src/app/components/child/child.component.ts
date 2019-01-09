import { Component, OnInit , Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  // 接收父组件传来的消息
  @Input() msg: any;
  @Input() run: any;
  @Input() home: any;
  @Output() private outer = new EventEmitter();

  constructor() { }

  ngOnInit() {
    console.log(this.msg);
    console.log(this.home)
  }
  getParentRun() {
    this.run();
    this.home.run()
  }
  // 在父组件里执行
  getChildMethod() {
    alert('来自child组件的方法');
  }
  getChildMsg() {
    alert('来自child组件的Msg');
  }
  // 通过事件驱动向父父组件广播数据
  sendParentMsg() {
    this.outer.emit('来自child组件的消息广播');
  }

}
