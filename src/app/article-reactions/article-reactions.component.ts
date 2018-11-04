import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-article-reactions",
  templateUrl: "./article-reactions.component.html",
  styleUrls: ["./article-reactions.component.css"]
})
export class ArticleReactionsComponent implements OnInit {
  @Input()
  likes: number;

  @Input()
  comments: string[];

  @Input()
  views: number;

  @Input()
  shares: number;

  @Output()
  onlike = new EventEmitter();

  @Output()
  oncomment = new EventEmitter();

  @Output()
  onshare = new EventEmitter();

  @Output()
  onview = new EventEmitter();

  constructor() {}

  ngOnInit() {}
}
