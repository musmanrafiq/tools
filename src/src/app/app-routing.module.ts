import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TagsComponent } from './pages/tags/tags.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {path : '', component : HomeComponent},

  {path : 'tags', component : TagsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true,
    //initialNavigation: 'disabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
