import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-chat-body',
  templateUrl: './chat-body.component.html',
  styleUrls: ['./chat-body.component.scss']
})
export class ChatBodyComponent implements OnInit {
@Input() chat;

  constructor() { }

  ngOnInit() {
    if(this.chat) {
     // debugger;
    }
  }

}
