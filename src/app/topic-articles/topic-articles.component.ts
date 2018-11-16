import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-topic-articles",
  templateUrl: "./topic-articles.component.html",
  styleUrls: ["./topic-articles.component.css"]
})
export class TopicArticlesComponent implements OnInit {
  colors = ["lightpink"];

  @Input()
  home = false;

  constructor() {}

  ngOnInit() {}
}
