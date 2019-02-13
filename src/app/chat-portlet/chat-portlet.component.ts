import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-chat-portlet',
  templateUrl: './chat-portlet.component.html',
  styleUrls: ['./chat-portlet.component.scss']
})
export class ChatPortletComponent implements OnInit {

  @Input() data;

  constructor() { }

  ngOnInit() {
    if (this.data) {
     // debugger
    }
  }

}
