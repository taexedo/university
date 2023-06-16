import {Component, EventEmitter, Input, Output} from '@angular/core';

import {StudentModel} from "../models/student.model";

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {

  @Input() student: StudentModel | undefined;
  @Output() onDeleteIconClick = new EventEmitter()
  @Output() onEditIconClick = new EventEmitter()
  deleteIconClick(student: StudentModel){
    this.onDeleteIconClick.emit(student)
  }

  editIconClick(student: StudentModel){
    this.onEditIconClick.emit(student)
  }

}
