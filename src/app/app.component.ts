import { Component } from "@angular/core";

interface Tag {
  name: string;
  color: string;
}

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "infosen";
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
}
