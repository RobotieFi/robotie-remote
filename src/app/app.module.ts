import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RemoteComponent } from './remote/remote.component';
import { TemplatesComponent } from './templates/templates.component';
import { DialogsComponent } from './dialogs/dialogs.component';
import { SchedulerComponent } from './scheduler/scheduler.component';
import { MotionsComponent } from './motions/motions.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add( fas );

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    RemoteComponent,
    TemplatesComponent,
    DialogsComponent,
    SchedulerComponent,
    MotionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(){
  }

}
