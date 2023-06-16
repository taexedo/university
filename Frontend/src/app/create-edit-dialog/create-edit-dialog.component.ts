import {Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {StudentModel} from "../models/student.model";

@Component({
  selector: 'app-create-edit-dialog',
  templateUrl: './create-edit-dialog.component.html',
  styleUrls: ['./create-edit-dialog.component.css']
})
export class CreateEditDialogComponent implements OnInit {
  @Input() initialFormData: StudentModel | null = null
  @Output() confirm = new EventEmitter()
  @Output() cancel = new EventEmitter()

  editForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.editForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      facultyNumber: ['', Validators.required],
      birthDate: ['', Validators.required],
    });
  }

  ngOnInit() {
    if (this.initialFormData) {
      let date = new Date(this.initialFormData.birthDate);
      let formattedDate = date.toISOString().split('T')[0];
      this.editForm.patchValue({
        ...this.initialFormData,
        birthDate: formattedDate
      });
    }
  }

  onConfirm() {
    if (this.editForm.valid) {
      const studentData = {
        firstName: this.editForm.get('firstName')!.value,
        lastName: this.editForm.get('lastName')!.value,
        facultyNumber: this.editForm.get('facultyNumber')!.value,
        birthDate: this.editForm.get('birthDate')!.value,
        _id: this.initialFormData?._id || ""
      }
      this.confirm.emit(studentData);
    } else {
      this.editForm.markAllAsTouched();
    }
  }

  onCancel() {
    this.cancel.emit()
  }
}
