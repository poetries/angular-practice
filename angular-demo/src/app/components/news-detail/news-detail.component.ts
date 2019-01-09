import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.scss']
})
export class NewsDetailComponent implements OnInit {

  public id = '';
  constructor( private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(data=>this.id=data.id);
  }

}
