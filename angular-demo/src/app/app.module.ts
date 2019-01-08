// 浏览器解析模块
import { BrowserModule } from '@angular/platform-browser';

// 核心模块
import { NgModule } from '@angular/core';

// 根路由
import { AppRoutingModule } from './app-routing.module';

// 跟组件
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NewsComponent } from './components/news/news.component';
import { HomeComponent } from './components/home/home.component';

// AppModule装饰器 告诉angular如何启动和编译应用
@NgModule({
  declarations: [ // 配置当前项目运行组件
    AppComponent,
     HeaderComponent,
     FooterComponent,
     NewsComponent,
     HomeComponent
  ],
  imports: [ // 配置当前模块运行依赖的模块
    BrowserModule,
    AppRoutingModule
  ],
  providers: [], // 配置项目所需服务

  // 生明模块的根组件
  bootstrap: [AppComponent]
})

//  根模块不需要导出任何东西 因为其他模块不需要导入根模块
export class AppModule { }
