import { Component, OnInit } from "@angular/core";
import { Article } from "./../article";
import { ArticlesService } from "./../articles.service";

@Component({
  selector: "app-head-article",
  templateUrl: "./head-article.component.html",
  styleUrls: ["./head-article.component.css"]
})
export class HeadArticleComponent implements OnInit {
  colors = ["lightblue"];

  articles: Article[];

  constructor(private articlesService: ArticlesService) {}

  ngOnInit() {
    this.getArticles();
  }

  getArticles(): void {
    this.articlesService
      .getArticles()
      .subscribe(articles => (this.articles = articles));
  }
}
