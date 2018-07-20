import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { ArticleService } from '../article.service';














@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  @Input() keyword;
  @Output() keywordChange = new EventEmitter();
  @Output() search =
    new EventEmitter<any>();

  isHighlight = false;
  fontSize = 12;
  person = {
    name: 'Mike',
    age: '18'
  };

  // get articles(): any[] {
  //   return this.articleService.articles;
  // }

  articles: any[] = [];

  /**
   *
   */
  constructor(private articleService: ArticleService, private httpClinet: HttpClient) {
  }

  ngOnInit() {
    console.log(this.keyword);
    this.httpClinet.get('assets/api/db.json').subscribe((data: any) => {
      this.articles = data.articles;
    });
    // this.articles = this.articleService.articles;
  }

  emitKeywordChange($event, input: HTMLInputElement) {
    this.keywordChange.emit(input.value);
    this.keyword = input.value;
  }


  buttonClick() {
    this.isHighlight = !this.isHighlight;
    this.fontSize = this.fontSize + 2;
    this.articleService.addArticle({});
    this.search.emit(this.keyword);
    // this.title = this.keyword;
  }
}
