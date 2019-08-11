import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dialogs',
  templateUrl: './dialogs.component.html',
  styleUrls: ['./dialogs.component.scss']
})
export class DialogsComponent implements OnInit {

  dialogtree = [
    {
    hear: "name",
    say: "My name is Kebbi, how are you?",
    continue: [
      {
        hear: "fine",
        say: "I'm glad to hear that!",
        action: "end"
      },
      {
        hear: "bad",
        say: "Oh, would you like me to cheer you up?",
        continue: [
          {
            hear: "yes",
            say: "Why did the chicken cross the road? [wait] To get to the other side. [wave]"
          },
          {
            hear: "no",
            say: "Okay, maybe some other time."
          }
        ]
      }
    ]
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
