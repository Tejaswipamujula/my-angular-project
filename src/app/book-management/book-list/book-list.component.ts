// book-list/book-list.component.ts
import { Component, OnInit } from '@angular/core';
import { BookService, Book } from '../book.service';

@Component({
  selector: 'app-book-list',
  template: `
    <ul>
      <li *ngFor="let book of books">{{ book.title }}</li>
    </ul>
  `,
})
export class BookListComponent implements OnInit {
  books: Book[] = [];

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.books = this.bookService.getBooks();
  }
}