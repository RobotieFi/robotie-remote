import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TemplatesComponent } from './templates/templates.component';
import { SchedulerComponent } from './scheduler/scheduler.component';
import { RemoteComponent } from './remote/remote.component';
import { MotionsComponent } from './motions/motions.component';
import { DialogsComponent } from './dialogs/dialogs.component';

const routes: Routes = [
  {
    path: '',
    component: RemoteComponent
  },
  {
    path: 'templates',
    component: TemplatesComponent
  },
  {
    path: 'scheduler',
    component: SchedulerComponent
  },
  {
    path: 'remote',
    component: RemoteComponent
  },
  {
    path: 'motions',
    component: MotionsComponent
  },
  {
    path: 'dialogs',
    component: DialogsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
