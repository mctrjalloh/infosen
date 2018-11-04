import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-article-content',
  templateUrl: './article-content.component.html',
  styleUrls: ['./article-content.component.css']
})
export class ArticleContentComponent implements OnInit {

  @Input() 
  content: string;
  
  constructor() { }

  ngOnInit() {
  }

}
