import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';


import { EmployeeAppComponent } from "./employee-app.component";
import { appRoutes } from "./routes";
import { EmployeeListComponent } from './employees/employee-list/employee-list.component';
import { UpdateEmployeeComponent } from "./employees/update-employee/update-employee.component";
import { AddEmployeeComponent } from "./employees/add-employee/add-employee.component";
import { EmployeeDetailComponent } from './employees/employee-details/employee-detail.component';
import { LoaderComponent } from "./shared/Loader/loader.component";

// Imports for loading & configuring the in-memory web api
// import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
// import { InMemoryDataService } from './in-memory-data.service';
import { EmployeeTypeListComponent } from './employee-types/employee-type-list/employee-type-list.component';
import { AddEmployeeTypeComponent } from './employee-types/add-employee-type/add-employee-type.component';
import { UserlistComponent } from './userlist/userlist.component';
import { BucketlistComponent } from './bucketlist/bucketlist.component';
import { SectionlistComponent } from './sectionlist/sectionlist.component';
import { ContentlistComponent } from './contentlist/contentlist.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatButtonModule} from '@angular/material/button';
@NgModule({
   declarations: [
      EmployeeAppComponent,
      EmployeeListComponent,
      UpdateEmployeeComponent,
      AddEmployeeComponent,
      EmployeeDetailComponent,
      EmployeeTypeListComponent,
      AddEmployeeTypeComponent,
      LoaderComponent,
      UserlistComponent,
      BucketlistComponent,
      SectionlistComponent,
      ContentlistComponent,
   ],
   imports: [
      BrowserModule,
      RouterModule.forRoot(appRoutes),
      CommonModule,
      // InMemoryWebApiModule.forRoot(InMemoryDataService),
      HttpClientModule,
      FormsModule,
      MatCardModule,
      BrowserAnimationsModule,
      MatDividerModule,
      MatExpansionModule,
      MatButtonModule
      
      
   ],
   providers: [],
   bootstrap: [EmployeeAppComponent]
})
export class AppModule { }
