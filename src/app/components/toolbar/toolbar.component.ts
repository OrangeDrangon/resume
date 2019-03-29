import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { CopyService } from 'src/app/services/copy/copy.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  public constructor(private snackBar: MatSnackBar, private copyService: CopyService) { }

  public ngOnInit() {
  }

  public openSnackbarPhone() {
    this.openSnackbar('(937) 701-4506')
  }

  public openSnackbarEmail() {
    this.openSnackbar('kyle@ekrosenberg.com');
  }

  private openSnackbar(message: string) {
    this.snackBar.open(message, 'Copy!', {
      duration: 5000,
    }).onAction().subscribe(() => {
      this.copyService.copy(message);
    });
  }

}
