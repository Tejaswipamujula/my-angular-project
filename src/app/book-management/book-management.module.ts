import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule
import { BookListComponent } from './book-list/book-list.component';
import { BookFormComponent } from './book-form/book-form.component';
import { BookManagementRoutingModule } from './book-management-routing.module';

@NgModule({
  declarations: [
    BookListComponent,
    BookFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule, // Add FormsModule to imports array
    HttpClientModule, // Add HttpClientModule to imports array
    BookManagementRoutingModule
  ]
})
export class BookManagementModule { }
