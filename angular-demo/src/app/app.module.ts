// 浏览器解析模块
import { BrowserModule } from '@angular/platform-browser';

// 核心模块
import { NgModule } from '@angular/core';

// 根路由
import { AppRoutingModule } from './app-routing.module';

import {FormsModule} from '@angular/forms';

import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';

// 跟组件
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { FormComponent } from './components/form/form.component';
import { TodoComponent } from './components/todo/todo.component';
import { SearchComponent } from './components/search/search.component';

// 引入服务
import { StorageService } from './services/storage.service';
import { RxjsService } from './services/rxjs.service';

import { DomComponent } from './components/dom/dom.component';
import { TransitionComponent } from './components/transition/transition.component';
import { ChildComponent } from './components/child/child.component';
import { HeaderComponent } from './components/header/header.component';
import { LifecircleComponent } from './components/lifecircle/lifecircle.component';
import { RxjsComponent } from './components/rxjs/rxjs.component';
import { FetchComponent } from './components/fetch/fetch.component';
import { RoutersComponent } from './components/routers/routers.component';
import { NewsComponent } from './components/news/news.component';
import { NewsDetailComponent } from './components/news-detail/news-detail.component';

// AppModule装饰器 告诉angular如何启动和编译应用
@NgModule({
  declarations: [ // 配置当前项目运行组件
    AppComponent,
     HomeComponent,
     FormComponent,
     TodoComponent,
     SearchComponent,
     DomComponent,
     TransitionComponent,
     ChildComponent,
     HeaderComponent,
     LifecircleComponent,
     RxjsComponent,
     FetchComponent,
     RoutersComponent,
     NewsComponent,
     NewsDetailComponent
  ],
  imports: [ // 配置当前模块运行依赖的模块
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpClientJsonpModule
  ],
  providers: [StorageService, RxjsService], // 配置项目所需服务

  // 生明模块的根组件
  bootstrap: [AppComponent]
})

//  根模块不需要导出任何东西 因为其他模块不需要导入根模块
export class AppModule { }
