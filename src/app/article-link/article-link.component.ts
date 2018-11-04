import { Component, OnInit } from "@angular/core";
import { ArticlesService } from "./../articles.service"; 
import { Article } from "./../article"

@Component({
  selector: "app-article-link",
  templateUrl: "./article-link.component.html",
  styleUrls: ["./article-link.component.css"]
})
export class ArticleLinkComponent implements OnInit {
  colors = ["lightpink", "lightblue", "lightgreen"];

  article = {
    title: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    image: "../assets/img/bassirou.png",
    author: "John Doe",
    date: "Oct 20, 2018"
  };

  articles: Article[];


  constructor(private articlesService: ArticlesService) {}

  ngOnInit() {
    this.getArticles();
  }

  getArticles(): void {
    this.articlesService
      .getArticles()
      .subscribe(articles => this.articles = articles);
  }
}
