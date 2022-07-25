import { HeaderRoutingModule } from './header-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    HeaderRoutingModule,
  ],
  exports:[
    HeaderComponent,
  ]
})
export class HeaderModule { }
