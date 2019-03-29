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
        icon: '📚',
        content: 'student',
      },
      {
        icon: '💻',
        content: 'developer'
      },
      {
        icon: '🔧',
        content: 'tinkerer'
      }
    ],
    [
      {
        icon: '✅',
        content: 'problem solver'
      },
      {
        icon: '📋',
        content: 'copy paster'
      },
      {
        icon: '🎮',
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
