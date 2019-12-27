import {Component, OnInit} from '@angular/core';
import {Book} from '../book';
import {BookService} from '../book.service';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-book-unread',
  templateUrl: './book-unread.component.html',
  styleUrls: ['./book-unread.component.css']
})
export class BookUnreadComponent implements OnInit {
  bookList: Book[] = [];
  createForm: FormGroup;

  constructor(
    private bookService: BookService,
    private fb: FormBuilder
  ) {
  }

  ngOnInit() {
    this.bookService
      .getAllBooks()
      .subscribe(next => (this.bookList = next)
        , error => (this.bookList = []));
    this.createForm = this.fb.group({
      name: [''],
      read: ['']
    });
  }

  onSubmit() {
    const {value} = this.createForm;
    this.bookService.createBook(value)
      .subscribe(next => {
          alert('them moi thanh cong');
          this.ngOnInit();
          this.createForm.reset({
            name: '',
            read: ''
          });
        }, error => console.log(error)
      );
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
