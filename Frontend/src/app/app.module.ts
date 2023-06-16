import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StudentListComponent } from './student-list/student-list.component';
import { FormsModule } from '@angular/forms';
import { StudentComponent } from './student/student.component';
import { ErrorComponentComponent } from './error-component/error-component.component';
import { StudentListHeaderComponent } from './student-list-header/student-list-header.component';
import { DeleteDialogComponent } from './delete-dialog/delete-dialog.component';
import { CreateEditDialogComponent } from './create-edit-dialog/create-edit-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    DashboardComponent,
    StudentListComponent,
    StudentComponent,
    ErrorComponentComponent,
    StudentListHeaderComponent,
    DeleteDialogComponent,
    CreateEditDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
