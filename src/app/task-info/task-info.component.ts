import {Component, OnInit} from '@angular/core';
import {Task} from '../shared/interfaces/task.interface';
import {TaskService} from '../shared/services/task.service';
import {Subscription, take} from 'rxjs';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-task-info',
  templateUrl: './task-info.component.html',
  styleUrls: ['./task-info.component.scss'],
})
export class TaskInfoComponent implements OnInit {
  constructor(private taskService: TaskService) {}

  public dataForm: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    priority: new FormControl(),
    status: new FormControl(),
    deadline: new FormControl(),
    user: new FormControl(),
    description: new FormControl(),
  });

  public currentTask!: Task;
  public editable: boolean = false;
  public taskSubscription: Subscription = new Subscription();

  public ngOnInit(): void {
    this.taskSubscription = this.taskService.getTask.pipe(take(1)).subscribe((task: Task) => {
      if (task instanceof Object) {
        this.currentTask = task;
      } else {
        this.currentTask = JSON.parse(task);
      }

      this.dataForm.patchValue(this.currentTask);
    });
  }

  public save(): void {
    this.currentTask.status = this.dataForm.controls['status'].value;
    this.currentTask.user = this.dataForm.controls['user'].value;
    this.dataForm.patchValue(this.currentTask);
    this.taskService.setTask = this.currentTask;
    this.editable = false;
  }
}
