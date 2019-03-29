import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './components/home/home.component';
import { MatCardModule, MatTooltipModule, MatButtonModule, MatSnackBarModule } from '@angular/material';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatCardModule,
    MatTooltipModule,
    MatButtonModule,
    MatSnackBarModule
  ]
})
export class HomeModule { }
