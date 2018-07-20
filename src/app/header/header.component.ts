import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title = 'The Will Will Web';
  subtitle = '記載著 Will 在網路世界的學習心得與技術分享!';
  url = 'http://blog.miniasp.com/';
  count = 0;

  constructor() {}

  ngOnInit() {}

  titleClick() {
    ++this.count;
    this.subtitle = 'Test ' + this.count;
  }
}
