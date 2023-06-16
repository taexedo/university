import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-student-list-header',
  templateUrl: './student-list-header.component.html',
  styleUrls: ['./student-list-header.component.css']
})
export class StudentListHeaderComponent {
  @Output() search = new EventEmitter<string>();
  @Output() onCreateButtonClick = new EventEmitter<string>();
  @Input() searchText: string = "";

  updateSearchText(value: string) {
    this.searchText = value
    this.search.emit(value);
  }

  onButtonClick(){
    this.onCreateButtonClick.emit()
  }
}
