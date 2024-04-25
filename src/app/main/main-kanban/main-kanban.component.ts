import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Task} from '../../shared/interfaces/task.interface';

@Component({
  selector: 'app-main-kanban',
  templateUrl: './main-kanban.component.html',
  styleUrls: ['./main-kanban.component.scss'],
})
export class MainKanbanComponent implements OnInit {
  @Input() public hidePopup: boolean = true;
  @Input() public task!: Task;

  @Output() public popUpListener: EventEmitter<boolean> = new EventEmitter<boolean>();

  public kanban: any[] = [
    {
      code: 'new',
      title: 'Новые',
      items: [],
    },
    {
      code: 'processing',
      title: 'В работе',
      items: [],
    },
    {
      code: 'test',
      title: 'Тестирование',
      items: [],
    },

    {
      code: 'completed',
      title: 'Выполнено',
      items: [],
    },
  ];

  ngOnInit() {
    this.getTasksFromStorage();
  }

  public pushTask(task: Task): void {
    const index: number = this.kanban.findIndex((t: any) => t.code === task.status);
    task.statusText = this.kanban[index].title;
    this.kanban[index].items.push(task);

    localStorage.setItem('items', JSON.stringify(this.kanban));
    this.hidePopup = true;
  }

  public getTasksFromStorage(): void {
    const defaultKanban: any[] = this.kanban;
    const storage: string = localStorage.getItem('items') ?? '';

    this.kanban = JSON.parse(storage) ?? defaultKanban;
  }

  public openPopup(): void {
    this.popUpListener.emit(false);
    this.hidePopup = !this.hidePopup;
  }
}
