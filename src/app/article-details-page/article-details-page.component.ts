import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article-details-page',
  templateUrl: './article-details-page.component.html',
  styleUrls: ['./article-details-page.component.css']
})
export class ArticleDetailsPageComponent implements OnInit {
  color: string = "lightblue";
  constructor() { }

  ngOnInit() {
  }

}
