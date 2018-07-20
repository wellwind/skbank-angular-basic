import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input()
  title;

  @Input()
  subtitle;

  url = 'http://blog.miniasp.com/';
  count = 0;

  constructor() {}

  ngOnInit() {}

  titleClick() {
    ++this.count;
    this.subtitle = 'Test ' + this.count;
  }
}
