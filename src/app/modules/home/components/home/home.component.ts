import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public lists: IAttribute[][] = [
    [
      {
        icon: 'assets/emoji/books.png',
        content: 'student',
      },
      {
        icon: 'assets/emoji/computer.png',
        content: 'developer'
      },
      {
        icon: 'assets/emoji/wrench.png',
        content: 'tinkerer'
      }
    ],
    [
      {
        icon: 'assets/emoji/check-mark.png',
        content: 'problem solver'
      },
      {
        icon: 'assets/emoji/clipboard.png',
        content: 'copy paster'
      },
      {
        icon: 'assets/emoji/video-game.png',
        content: 'video game nerd'
      }
    ]
  ];

  constructor() { }

  ngOnInit() {
  }

}

interface IAttribute {
  icon: string;
  content: string;
}
