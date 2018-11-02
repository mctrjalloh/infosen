import { ARTICLES } from "./mock-articles";
import { Injectable } from "@angular/core";
import { Article } from "./article";
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ArticlesService {
  constructor() {}

  getArticles(): Observable<Article[]> {
    return of(ARTICLES);
  }

  addLike(article_id: number):void {
    ARTICLES[article_id].likes+=1;
  }
}
