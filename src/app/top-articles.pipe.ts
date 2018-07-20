import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'topArticles'
})
export class TopArticlesPipe implements PipeTransform {

  transform(value: any[], count?: any): any {
    console.log(count);
    return value.slice(0, count || 2);
  }

}
