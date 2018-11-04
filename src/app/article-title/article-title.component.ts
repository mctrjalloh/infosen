import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-article-title",
  templateUrl: "./article-title.component.html",
  styleUrls: ["./article-title.component.css"]
})
export class ArticleTitleComponent implements OnInit {
  @Input()
  title: string;

  @Input()
  category: string;
  
  @Input()
  author: string;

  @Input()
  date: string;

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

  getUrl() {
    return "url('src/assets/img/bassirou.png')";
  }

  constructor() {}

  ngOnInit() {}
}
