import { Component } from '@angular/core';
import { BookFormService } from './book-form.service';
import { Book } from '../book.service';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent {
  book: Book = {
    title: '',
    author: '',
    isbn: ''
  };

  constructor(private bookFormService: BookFormService) {}

  onSubmit(form: any) {
    if (form.valid) {
      this.bookFormService.submitBook(this.book).subscribe(
        response => {
          console.log('Book submitted successfully:', response);
          // Optionally, reset the form or provide feedback to the user
          this.book = { title: '', author: '', isbn: '' };
          form.resetForm();
        },
        error => {
          console.error('Error submitting book:', error);
        }
      );
    }
  }
}
