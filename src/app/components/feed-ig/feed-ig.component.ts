import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feed-ig',
  templateUrl: './feed-ig.component.html',
  styleUrls: ['./feed-ig.component.css']
})
export class FeedIGComponent implements OnInit {

  constructor() {
    this.loadWidgetIG();
   }

  ngOnInit(): void {
  }
  loadWidgetIG():void {
    let script = document.createElement("script");
    script.src="https://apps.elfsight.com/p/platform.js";
    let body = document.getElementsByTagName("body")[0];
    body.appendChild(script)

   
  }

}
