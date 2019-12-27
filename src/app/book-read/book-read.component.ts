import { Component, OnInit } from '@angular/core';
import {Book} from '../book';
import {BookService} from '../book.service';

@Component({
  selector: 'app-book-read',
  templateUrl: './book-read.component.html',
  styleUrls: ['./book-read.component.css']
})
export class BookReadComponent implements OnInit {
  bookList: Book[] = [];
  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.bookService
      .getAllBooks()
      .subscribe(next => (this.bookList = next)
        , error => (this.bookList = []));
  }

  changeStatus(book: Book) {
    console.log(book);
    const update: Book = {
      id: book.id,
      name: book.name,
      read: !book.read
    };
    this.bookService.editBook(update).subscribe(next => {
      this.ngOnInit();
    });
  }
}
