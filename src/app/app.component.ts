import { Component } from "@angular/core";

interface Tag {
  name: string;
  color: string;
}

export interface Title {
  color: string;
  cols: number;
  rows: number;
  text: string;
  image: string;
}

export interface Article {
  title: string;
  color: string;
  rows: number;
  cols: number;
}

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "infosen";
  colors = ["lightpink", "lightblue", "#DDBDF1", "lightgreen"];

  categories: string[] = [
    "Actualite",
    "Societe",
    "Sport",
    "Politique",
    "Photos",
    "Videos",
    "Blogs",
    "Faits-Divers",
    "People"
  ];

  tags: Tag[] = [
    {
      name: "football",
      color: ""
    },
    {
      name: "lutte",
      color: ""
    },
    {
      name: "revue de presse",
      color: "primary"
    },
    {
      name: "elections",
      color: "accent"
    }
  ];

  tiles: Title[] = [
    {
      text: "One",
      image:
        "http://images.seneweb.com/dynamic/modules/news/images/talla/serigne_mbaye_thiam-21-40-2018_08_40_30.jpg",
      cols: 2,
      rows: 2,
      color: "lightblue"
    },
    { text: "Two", image: "", cols: 1, rows: 1, color: "lightgreen" },

    { text: "Three", image: "", cols: 1, rows: 1, color: "lightpink" },
    { text: "Four", image: "", cols: 1, rows: 1, color: "#DDBDF1" },
    { text: "Five", image: "", cols: 1, rows: 1, color: "#DDBDF1" }
  ];

  articles: Article[] = [
    { title: "One", cols: 2, rows: 1, color: "lightpink" },
    { title: "Two", cols: 2, rows: 1, color: "lightblue" },
    { title: "Three", cols: 1, rows: 1, color: "lightpink" },
    { title: "Four", cols: 1, rows: 1, color: "#DDBDF1" },
    { title: "Five", cols: 2, rows: 1, color: "lightgreen" }
  ];
}
