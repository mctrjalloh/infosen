import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  color = "lightblue";

  categories = [
    "Actualite",
    "Politique",
    "Societe",
    "Sport",
    "Magazine",
    "Videos", 
    "Divers"

  ]

  constructor() { }

  ngOnInit() {
  }

}
