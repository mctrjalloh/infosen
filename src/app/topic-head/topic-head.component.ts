import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topic-head',
  templateUrl: './topic-head.component.html',
  styleUrls: ['./topic-head.component.css']
})
export class TopicHeadComponent implements OnInit {
  color: string = "lightblue"
  constructor() { }

  ngOnInit() {
  }

}
