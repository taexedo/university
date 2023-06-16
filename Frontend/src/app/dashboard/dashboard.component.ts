import { Component, OnInit } from '@angular/core';
import {StudentsDataService} from "../students-data.service";
import {Observable} from "rxjs";
import {StudentModel} from "../models/student.model";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{

  constructor(private StudentsDataService: StudentsDataService) {
  }

  studentList: StudentModel[] = [];

  ngOnInit() {
    this.StudentsDataService.getStudents().subscribe(
      (students: StudentModel[]) => {
        this.studentList = students;
      },
      error => {
        console.error('There was an error getting students!', error);
      }
    );
  }

}
