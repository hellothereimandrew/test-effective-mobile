import {Component, Input, OnInit} from '@angular/core';
import {Task} from 'src/app/shared/interfaces/task.interface';
import {TaskService} from '../../../shared/services/task.service';

@Component({
  selector: 'app-main-kanban-card',
  templateUrl: './main-kanban-card.component.html',
  styleUrls: ['./main-kanban-card.component.scss'],
})
export class MainKanbanCardComponent implements OnInit {
  constructor(private taskService: TaskService) {}

  @Input() public task!: Task;

  public ngOnInit(): void {
    this.taskService.setTask = this.task;
  }
}
