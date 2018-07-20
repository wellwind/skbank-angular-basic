import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'The Will Will Web';
  subtitle = '記載著 Will 在網路世界的學習心得與技術分享!';
  keyword = 'keyword';

  doSearch(keyword) {
    this.title = keyword;
  }
}
