import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {StudentModel} from "./models/student.model";

@Injectable({
  providedIn: 'root'
})
export class StudentsDataService {
 constructor(private http: HttpClient) {
 }
  private apiUrl = 'http://localhost:3001/students'

  getStudents(): Observable<StudentModel[]> {
    return this.http.get<StudentModel[]>(this.apiUrl)
  }

  createStudent(student: StudentModel): Observable<StudentModel> {
    return this.http.post<StudentModel>(this.apiUrl, student);
  }

  updateStudent(student: StudentModel): Observable<StudentModel> {
    return this.http.put<StudentModel>(this.apiUrl, student);
  }

  deleteStudent(id: string): Observable<StudentModel> {
    return this.http.delete<StudentModel>(`${this.apiUrl}/${id}`);
  }

}
