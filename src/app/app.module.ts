import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { HeaderComponent } from './header/header.component';
import { ServiceComponent } from './index/service/service.component';
import { ProjectsComponent } from './index/projects/projects.component';
import { DesignComponent } from './index/design/design.component';
import { CustomerComponent } from './index/customer/customer.component';
import { FooterComponent } from './index/footer/footer.component';
import { AboutComponent } from './about/about.component';
import { Route,RouterModule } from '@angular/router';
import { ModularKitchenComponent } from './modular-kitchen/modular-kitchen.component';
import { BedroomComponent } from './bedroom/bedroom.component';
import { ContactComponent } from './contact/contact.component';
import { EmployeelistComponent } from './employeelist/employeelist.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    HeaderComponent,
    ServiceComponent,
    ProjectsComponent,
    DesignComponent,
    CustomerComponent,
    FooterComponent,
    AboutComponent,
    ModularKitchenComponent,
    BedroomComponent,
    ContactComponent,
    EmployeelistComponent
  ],
  imports: [
    RouterModule.forRoot([
      {path: '', component: IndexComponent},
      {path: 'about', component: AboutComponent},
      {path: 'modular-kitchen',component: ModularKitchenComponent},
      {path: 'bedroom',component: BedroomComponent},
      {path: 'contact',component: ContactComponent},
      {path: 'employees',component: EmployeelistComponent}
    ]),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
