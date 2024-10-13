import { Component } from '@angular/core';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent {
  book = {
    title: '',
    author: ''
  };

  constructor(private bookService: BookService) { }

  onSubmit() {
    this.bookService.addBook(this.book).subscribe(
      response => {
        console.log('Book submitted successfully:', response);
        // Optionally, reset the form or provide feedback to the user
        this.book = { title: '', author: '' };
      },
      error => {
        console.error('Error submitting book:', error);
      }
    );
  }
}
