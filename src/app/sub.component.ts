import { Component, Input } from '@angular/core';
import { Book } from './book';

@Component({
  selector: 'app-sub-component',
  template: `
    <div *ngIf="item" bgcolor="red">
      <h2>{{item.title}}</h2>
      <h2>{{item.price}}</h2>
      </div>
  `,
})

export class SubComponent {
    @Input() item: Book;
}
