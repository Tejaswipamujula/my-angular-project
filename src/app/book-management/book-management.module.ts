import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
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
    FormsModule,
    HttpClientModule,
    BookManagementRoutingModule
  ]
})
export class BookManagementModule { }
