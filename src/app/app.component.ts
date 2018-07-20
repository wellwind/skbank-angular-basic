import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '[Hi!新光銀行]';
  keyword = 'test';
  isHighlight = false;
  fontSize = 12;
  person = {
    name: 'Mike',
    age: '18'
  };

  keywordChange($event, input: HTMLInputElement) {
    this.keyword = input.value;
  }

  buttonClick() {
    this.isHighlight = !this.isHighlight;
    this.fontSize = this.fontSize + 2;
  }
}
