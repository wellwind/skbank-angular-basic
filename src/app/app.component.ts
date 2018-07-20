import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '[Hi!新光銀行]';
  keyword = 'test';

  keywordChange($event, input) {
    this.keyword = input.value;
  }
}
