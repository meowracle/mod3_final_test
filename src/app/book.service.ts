import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Book} from './book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private readonly API_URL = 'http://localhost:8081/books';

  constructor(private http: HttpClient) { }
  getAllBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.API_URL);
  }
  getBookById(id: string): Observable<Book> {
    return this.http.get<Book>(this.API_URL + id);
  }
  createBook(book: Book): Observable<any> {
    return this.http.post(this.API_URL, book);
  }
  editBook(book: Book): Observable<any> {
    return this.http.put(this.API_URL, book);
  }
}
