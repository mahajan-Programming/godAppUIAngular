import { Routes } from "@angular/router";

import { EmployeeListComponent } from "./employees/employee-list/employee-list.component";
import { UpdateEmployeeComponent } from "./employees/update-employee/update-employee.component";
import { AddEmployeeComponent } from "./employees/add-employee/add-employee.component";
import { EmployeeDetailComponent } from "./employees/employee-details/employee-detail.component";
import { EmployeeTypeListComponent } from "./employee-types/employee-type-list/employee-type-list.component";
import { AddEmployeeTypeComponent } from "./employee-types/add-employee-type/add-employee-type.component";
import { UserlistComponent } from "./userlist/userlist.component";
import { BucketlistComponent } from "./bucketlist/bucketlist.component";
import { SectionlistComponent } from "./sectionlist/sectionlist.component";
import { ContentlistComponent } from "./contentlist/contentlist.component";

export const appRoutes: Routes = [
   {path: 'pothi/users', component :UserlistComponent},
   {path: 'pothi/buckets', component :BucketlistComponent},
   {path: 'pothi/sections', component :SectionlistComponent},
   {path: 'pothi/contents', component :ContentlistComponent},
   { path: 'employees/add', component: AddEmployeeComponent },
   { path: 'employees/update/:id', component: UpdateEmployeeComponent },
   { path: 'employees/:id', component: EmployeeDetailComponent },
   { path: 'employees', component: EmployeeListComponent },
   { path: 'employee-types', component: EmployeeTypeListComponent },
   { path: 'employee-types/add', component: AddEmployeeTypeComponent },
   { path: '', redirectTo: 'employees', pathMatch: 'full' },
   { path: '**', redirectTo: 'employees', pathMatch: 'full' }
]