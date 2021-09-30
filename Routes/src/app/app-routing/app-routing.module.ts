import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component';
import { ContactComponent } from '../contact/contact.component';
import { BooksComponent } from '../books/books.component';

const booksRoutes: Routes = [
  {path: 'id', component: BooksComponent}
];

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'books', component: BooksComponent, children: booksRoutes},
  {path: '', redirectTo: 'home', pathMatch:'full'},
  {path: '**',component: HomeComponent}];

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AppRoutingModule { }
