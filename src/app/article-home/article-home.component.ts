import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-article-home",
  templateUrl: "./article-home.component.html",
  styleUrls: ["./article-home.component.css"]
})
export class ArticleHomeComponent implements OnInit {
  article = {
    category: "Videos",
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    image:
      "http://images.seneweb.com//content/seneweb/news/images/10-2018/thumbs/308x160_e872d295a1a885d558f59f86f631d3bb99176028.png",
    image_alt: "src/assets/img/bassirou.png",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur optio iusto sit facilis, maxime temporibus saepe tempora, consequatur quibusdam nisi ex corporis asperiores ducimus, amet beatae dignissimos. Porro, placeat sint.",
    likes: 7,
    comments: [
      "Lorem ipsum dolor sit amet consectetur",
      "Consequuntur optio iusto sit facilis",
      "maxime temporibus saepe tempora"
    ],
    shares: 4,
    author: "John Doe",
    date: "Oct 20, 2018",
    tags: ["lorem", "ipsum", "dolor", "sit"]
  };

  constructor() {}

  ngOnInit() {}
}
