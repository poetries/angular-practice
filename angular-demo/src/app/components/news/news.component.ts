import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  constructor() { }

  public list:any = [
    '新闻1',
    '新闻2',
    '新闻3',
    '新闻4'
  ]

  ngOnInit() {
  }

}
