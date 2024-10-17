import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Book {
  id?: number;
  title: string;
  author: string;
}

export abstract class BookServiceBase {
  abstract addBook(book: Book): Observable<Book>;
  abstract getBooks(): Observable<Book[]>;
  abstract updateBook(book: Book): Observable<Book>;
  abstract deleteBook(id: number): Observable<void>;
}

@Injectable({
  providedIn: 'root'
})
export class BookService extends BookServiceBase {
  private apiUrl = 'https://your-api-endpoint.com/api/books'; // Replace with your actual API endpoint

  constructor(private http: HttpClient) {
    super();
  }

  addBook(book: Book): Observable<Book> {
    return this.http.post<Book>(this.apiUrl, book);
  }

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.apiUrl);
  }

  updateBook(book: Book): Observable<Book> {
    return this.http.put<Book>(`${this.apiUrl}/${book.id}`, book);
  }

  deleteBook(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
