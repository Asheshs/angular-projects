import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { NavigationComponent } from './navigation/navigation.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeserviceService } from './service/employeeservice.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CreateemployeeComponent } from './createemployee/createemployee.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    NavigationComponent,
    EmployeeComponent,
    CreateemployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [EmployeeserviceService, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
