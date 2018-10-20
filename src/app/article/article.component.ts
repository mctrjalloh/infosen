import { Component, OnInit } from "@angular/core";

interface Article {
  title: string;
  image: string;
  author: string;
  date: string;
}

@Component({
  selector: "app-article",
  templateUrl: "./article.component.html",
  styleUrls: ["./article.component.css"]
})
export class ArticleComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
