import { Injectable } from '@angular/core';
import { Author, Book } from '../model/book';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  private books = [
    new Book (1001, 'Tech', 'Introduction to angular', 50.25, [new Author('Bob', 'T')], 2017)
  ];
  constructor() { }

  public getBook(id: string): Book {
    // tslint: disable-next-line: radix
    return <Book>this.books.find(book=> book.id === Number.parseInt(id));
  }
}
