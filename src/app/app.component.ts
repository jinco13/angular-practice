import { Component } from '@angular/core';
import { Book } from './book';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  selected: Book;
  books = [
    {
      title: 'アジャイルソフトウェアの奥義',
      price: 3000
    },
    {
      title: 'アルゴリズム図鑑',
      price: 2000
    }
  ];

  goToSetting() {

  }

  onClickBook(item: any) {
    console.log(item);
    this.selected = item;
  }
}
