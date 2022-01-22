import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { BlogComponent } from './blog/blog.component';
import { CoursesComponent } from './courses/courses.component';


@NgModule({
  declarations: [BlogComponent, CoursesComponent],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
