import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {Task} from '../interfaces/task.interface';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private taskSubject: BehaviorSubject<any> = new BehaviorSubject<any>(localStorage.getItem('task') || null);

  public get getTask(): Observable<any> {
    return this.taskSubject.asObservable();
  }

  public set setTask(task: Task) {
    const obj: string = JSON.stringify(task);

    this.taskSubject.next(task);
    localStorage.setItem('task', obj);
  }
}
