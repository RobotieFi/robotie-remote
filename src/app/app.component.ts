import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'robotie-remote-angular';

  devices = [
    {
      name: 'Kebbi',
      id: '1',
      type: 'kebbi'
    }
  ];

  device = {
    name: 'Kebbi'
  };

}
