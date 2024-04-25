import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from './main/main.component';
import {TaskInfoComponent} from './task-info/task-info.component';

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'task-info', component: TaskInfoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
