import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from "./blog/blog.component";
import { CoursesComponent } from "./courses/courses.component";

const routes: Routes = [
  {
    path: 'admin', children: [
      { path: 'blog', component: BlogComponent },
      { path: 'courses', component: CoursesComponent }    
    ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
