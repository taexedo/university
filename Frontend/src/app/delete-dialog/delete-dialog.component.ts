import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.css']
})
export class DeleteDialogComponent {

  @Output() confirm = new EventEmitter()
  @Output() cancel = new EventEmitter()
  onConfirm(){
    this.confirm.emit()
  }

  onCancel(){
    this.cancel.emit()
  }
}
