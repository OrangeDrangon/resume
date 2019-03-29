import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { CopyService } from 'src/app/services/copy/copy.service';

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

  public contacts: IAttribute[] = [
    {
      icon: 'email',
      content: 'kyle@ekrosenberg.com'
    },
    {
      icon: 'phone',
      content: '(937) 701-4506'
    }
  ];

  constructor(private snackBar: MatSnackBar, private copyService: CopyService) { }

  ngOnInit() {
  }

  public copy(content: string) {
    this.copyService.copy(content);
    this.openSnackBar('Copied!');
  }

  public openSnackBar(message: string) {
    const ref = this.snackBar.open(message, 'Dismiss!', {
      duration: 3000
    });
    ref.onAction().subscribe(() => {
      ref.dismiss();
    });
  }

}

interface IAttribute {
  icon: string;
  content: string;
}
