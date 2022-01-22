import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { pathToFileURL } from 'url';
import { BlogComponent } from "./components/blog/blog.component";
import { ContactComponent } from "./components/contact/contact.component";
import { CoursesComponent } from "./components/courses/courses.component";
import { HomeComponent } from "./components/home/home.component";

const routes: Routes = [
{path:'home', component:HomeComponent},
{path:'blog', component:BlogComponent},
{path:'courses', component:CoursesComponent},
{path:'contact', component:ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
