import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { UsersModule } from './users/users.module';
import { ProductsComponent } from './products/products.component';
import { HideElementsDirective } from './hide-elements.directive';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { CoursesComponent } from './components/courses/courses.component';
import { BlogComponent } from './components/blog/blog.component';
import { AdminModule } from "./admin/admin.module";

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    ProductsComponent,
    HideElementsDirective,
    HomeComponent,
    ContactComponent,
    CoursesComponent,
    BlogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UsersModule,
    FormsModule,
    NgbModule,
    AdminModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
