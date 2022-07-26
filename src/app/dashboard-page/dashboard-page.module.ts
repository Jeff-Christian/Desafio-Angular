import { HeaderComponent } from './../header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderModule } from './../header/header.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FontAwesomeModule,
    HeaderModule,
  ],
  exports: [
    HeaderComponent
  ]
})
export class DashboardPageModule { }
