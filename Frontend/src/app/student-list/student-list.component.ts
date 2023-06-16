import { Component, OnInit } from '@angular/core';
import {StudentModel} from "../models/student.model";
import {StudentsDataService} from "../students-data.service";
@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit{

  constructor(private StudentsDataService: StudentsDataService) {
  }
  studentList: StudentModel[] = [];
  isLoading : Boolean = true;
  isError: Boolean = false;
  searchText: string = ''
  isCreateEditModalVisible: Boolean = false;
  isDeleteModalVisible: Boolean = false;
  selectedStudent: StudentModel | null = null;


  ngOnInit() {
    this.getStudents()
  }


  get filteredStudents() {
    return this.studentList.filter(student =>
      student.firstName.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }

  onDeleteIconClick(student: StudentModel){
    this.selectedStudent = student;
    this.isDeleteModalVisible = true
    document.body.classList.add('modal-open');
  }

  onCreateButtonClick(){
    this.isCreateEditModalVisible = true;
    document.body.classList.add('modal-open');
  }

  onEditIconClick(student: StudentModel){
    this.selectedStudent = student;
    this.isCreateEditModalVisible = true;
    document.body.classList.add('modal-open');
  }

  editCreateAction(studentObject: StudentModel){
    if(studentObject?._id){
      this.StudentsDataService.updateStudent(studentObject).subscribe(() => {
        this.isCreateEditModalVisible = false;
        document.body.classList.remove('modal-open');
        this.selectedStudent = null;
        this.getStudents()
      })
    } else {
      this.StudentsDataService.createStudent(studentObject).subscribe(() => {
        this.isCreateEditModalVisible = false;
        document.body.classList.remove('modal-open');
        this.selectedStudent = null;
        this.getStudents()
      })
    }
  }

  deleteAction(){
    if(this.selectedStudent){
      this.StudentsDataService.deleteStudent(this.selectedStudent._id).subscribe(() => {
        this.isDeleteModalVisible = false;
        document.body.classList.remove('modal-open');
        this.selectedStudent = null;
        this.getStudents()
        this.searchText = ""
      })
    }
  }

  onDialogCancelClick(){
    this.isCreateEditModalVisible = false;
    this.isDeleteModalVisible = false;
    document.body.classList.remove('modal-open');
    this.selectedStudent = null;
  }

  getStudents(){
    this.StudentsDataService.getStudents().subscribe(
      (students: StudentModel[]) => {
        this.studentList = students;
        this.isLoading = false;
      },
      error => {
        this.isLoading = false;
        this.isError = true;
        console.error('There was an error getting students!', error);
      }
    );
  }


}
