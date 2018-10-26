import { Component, OnInit } from "@angular/core";

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

  constructor() {}

  ngOnInit() {}
}
