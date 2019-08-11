import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-templates',
  templateUrl: './templates.component.html',
  styleUrls: ['./templates.component.scss']
})
export class TemplatesComponent implements OnInit {

  messages = [
    {
      date: '12:00:00',
      lang: 'en',
      text: 'This is a test message with [action]'
    },
    {
      date: '13:00:00',
      lang: 'en',
      text: 'This is another message with [action]'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
