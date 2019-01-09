import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TodoComponent } from './components/todo/todo.component';
import { SearchComponent } from './components/search/search.component';
import { NewsComponent } from './components/news/news.component';
import { NewsDetailComponent } from './components/news-detail/news-detail.component';

// 配置路由
const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'todo', component: TodoComponent},
  {path: 'search', component: SearchComponent},
  {path: 'news', component: NewsComponent},
  {path: 'news-detail/:id', component: NewsDetailComponent},
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
} ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
