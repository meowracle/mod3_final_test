import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {BookService} from '../book.service';

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.css']
})
export class BookCreateComponent implements OnInit {
  createForm: FormGroup;
  constructor(
    private bookService: BookService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
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
        this.createForm.reset({
          name: '',
          read: ''
        });
      }, error => console.log(error)
      );
  }

}
