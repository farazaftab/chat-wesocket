import { Component, OnInit } from '@angular/core';
import { SocketService } from '../socket.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  set1: any;
  set2: any;
  set3: any;

   user1 = {
    id: "Andrew",
    pwd: "test"
  }

   user2 = {
    id: "Bill",
    pwd: "test"
  }


   user3 = {
    id: "Charlie",
    pwd: "test"
  }

  constructor(private socketService: SocketService) { }

  ngOnInit() {
    this.set1 = {
      user: "Andrew",
      friends:
        [
          {
            name: "Bill",
            history: [
              {
                type: "in",
                msg: "hey"
              },
              {
                type: "out",
                msg: "hey"
              },
              {
                type: "in",
                msg: "how are You"
              },
              {
                type: "out",
                msg: "I am great!"
              }
            ]

          }, {
            name: "Charlie",
            history: [
              {
                type: "in",
                msg: "hey"
              },
              {
                type: "out",
                msg: "hey"
              },
              {
                type: "in",
                msg: "how are You"
              },
              {
                type: "out",
                msg: "I am great!"
              }
            ]
          }
        ],
    }


    this.set2 = {
      user: "Bill",
      friends:
        [
          {
            name: "Bill",
            history: [
              {
                type: "in",
                msg: "hey"
              },
              {
                type: "out",
                msg: "hey"
              },
              {
                type: "in",
                msg: "how are You"
              },
              {
                type: "out",
                msg: "I am great!"
              }
            ]

          }, {
            name: "Charlie",
            history: [
              {
                type: "in",
                msg: "hey"
              },
              {
                type: "out",
                msg: "hey"
              },
              {
                type: "in",
                msg: "how are You"
              },
              {
                type: "out",
                msg: "I am great!"
              }
            ]
          }
        ],
    }

    this.set3 =    this.set1
   


    this.socketService.login(this.user1).subscribe((data) => {
     const ws = new WebSocket(`ws://localhost:8080`);
        ws.onopen = () => {
      this.user1['ws'] = ws
      };
    });


  }



}
