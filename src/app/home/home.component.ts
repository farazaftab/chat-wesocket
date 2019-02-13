import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  set1: any;
  set2: any;
  set3: any;

  constructor() { }

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


  }



}
