import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Task} from '../../../shared/interfaces/task.interface';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-main-kanban-create-task',
  templateUrl: './main-kanban-create-task.component.html',
  styleUrls: ['./main-kanban-create-task.component.scss'],
})
export class MainKanbanCreateTaskComponent {
  @Input() public hidePopup: boolean = true;
  @Output() public popUpListener: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() public taskListener: EventEmitter<Task> = new EventEmitter<Task>();

  public dataForm: FormGroup = new FormGroup({
    id: new FormControl(0),
    name: new FormControl(''),
    priority: new FormControl(''),
    status: new FormControl('new'),
    deadline: new FormControl(''),
    user: new FormControl(''),
    description: new FormControl(''),
  });

  public createNewTask(): void {
    const form: FormGroup = this.dataForm;

    const task: Task = {
      id: form.controls['id'].value,
      name: form.controls['name'].value,
      priority: form.controls['priority'].value,
      status: form.controls['status'].value,
      statusText: '',
      deadline: form.controls['deadline'].value,
      user: form.controls['user'].value,
      description: form.controls['description'].value,
    };

    this.taskListener.emit(task);
    this.hidePopup = true;
  }

  public cancel(): void {
    this.popUpListener.emit(true);
    this.hidePopup = true;
  }
}
