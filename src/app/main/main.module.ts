import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AppRoutingModule} from '../app-routing.module';

import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';

import {MainComponent} from './main.component';
import {MainKanbanComponent} from './main-kanban/main-kanban.component';
import {MainKanbanCardComponent} from './main-kanban/main-kanban-card/main-kanban-card.component';
import {MainKanbanCreateTaskComponent} from './main-kanban/main-kanban-create-task/main-kanban-create-task.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [MainComponent, MainKanbanComponent, MainKanbanCardComponent, MainKanbanCreateTaskComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MatButtonModule,
    MatCardModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
  ],
  exports: [],
})
export class MainModule {}
