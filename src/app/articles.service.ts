import { ARTICLES } from "./mock-articles";
import { Injectable } from "@angular/core";
import { Article } from "./article";

@Injectable({
  providedIn: "root"
})
export class ArticlesService {
  constructor() {}

  getArticles(): Article[] {
    return ARTICLES;
  }
}
