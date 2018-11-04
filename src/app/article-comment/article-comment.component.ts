import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-article-comment',
  templateUrl: './article-comment.component.html',
  styleUrls: ['./article-comment.component.css']
})
export class ArticleCommentComponent implements OnInit {
  @Input()
  comment: string = `Lorem ipsum dolor sit amet consectetur adipisicing 
        elit. Consequuntur optio iusto sit facilis, maxime 
        temporibus saepe tempora, consequatur quibusdam 
        nisi ex corporis asperiores ducimus, amet beatae 
        dignissimos. Porro, placeat sint.`

  constructor() { }

  ngOnInit() {
  }

}
