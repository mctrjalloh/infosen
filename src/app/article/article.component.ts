import { ArticlesService } from "./../articles.service";
import { Component, OnInit, Input } from "@angular/core";
import { Article } from "../article";

@Component({
  selector: "app-article",
  templateUrl: "./article.component.html",
  styleUrls: ["./article.component.css"]
})
export class ArticleComponent implements OnInit {
  articles: Article[];

  commenting = false;

  constructor(private articlesService: ArticlesService) {}

  ngOnInit() {
    this.getArticles();
  }

  getArticles(): void {
    this.articlesService
      .getArticles()
      .subscribe(articles => (this.articles = articles));
  }

  addLike(article_id: number): void {
    this.articlesService.addLike(article_id);
  }

  addComment(article_id: number): void {
    this.commenting = true;
  }
}
