import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomepageComponent} from './homepage/homepage.component';
import {BookCreateComponent} from './book-create/book-create.component';
import {BookReadComponent} from './book-read/book-read.component';
import {BookUnreadComponent} from './book-unread/book-unread.component';

const routes: Routes = [{
  path: '',
  component: HomepageComponent
}, {
  path: 'books/create',
  component: BookCreateComponent
}, {
  path: 'books/book-read',
  component: BookReadComponent
}, {
  path: 'books/book-unread',
  component: BookUnreadComponent
}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
