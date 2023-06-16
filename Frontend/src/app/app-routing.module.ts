import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {StudentListComponent} from './student-list/student-list.component';

const routes: Routes = [{path: "", component: DashboardComponent}, {path: "students", component: StudentListComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
